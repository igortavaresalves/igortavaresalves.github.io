// Point-cloud generators for the morphing particle field.
// Each returns n points as a flat [x, y, z, x, y, z, ...] array, roughly
// within a 2.6 x 2.2 box centered at the origin (y up).

export type Shape = Float32Array;

const TAU = Math.PI * 2;
const rand = (min: number, max: number) => min + Math.random() * (max - min);

function randomDirection(): [number, number, number] {
  const u = rand(-1, 1);
  const th = rand(0, TAU);
  const s = Math.sqrt(1 - u * u);
  return [s * Math.cos(th), u, s * Math.sin(th)];
}

function build(n: number, sample: () => [number, number, number]): Shape {
  const out = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const [x, y, z] = sample();
    out[i * 3] = x;
    out[i * 3 + 1] = y;
    out[i * 3 + 2] = z;
  }
  return out;
}

// Side-view brain: folded cerebrum split in two hemispheres, cerebellum and stem.
export function brain(n: number): Shape {
  return build(n, () => {
    const r = Math.random();
    if (r < 0.84) {
      const [dx, dy, dz] = randomDirection();
      const fold = 1 + 0.07 * Math.sin(9 * dx + 4 * Math.sin(7 * dy)) * Math.cos(8 * dz + 3 * dy);
      const shell = rand(0.86, 1);
      let y = dy * 0.82 * fold * shell + 0.12;
      if (y < -0.4) y = -0.4 + (y + 0.4) * 0.35;
      return [dx * 1.18 * fold * shell, y, dz * 0.92 * fold * shell + Math.sign(dz) * 0.06];
    }
    if (r < 0.95) {
      const [dx, dy, dz] = randomDirection();
      const stripes = 1 + 0.06 * Math.sin(dy * 30);
      return [-0.7 + dx * 0.38 * stripes, -0.5 + dy * 0.24 * stripes, dz * 0.55 * stripes];
    }
    const th = rand(0, TAU);
    const y = rand(-1.05, -0.35);
    return [-0.3 + Math.cos(th) * 0.15 + (y + 0.35) * 0.25, y, Math.sin(th) * 0.15];
  });
}

// Particles scattered through a wide volume: the brain "coming apart".
export function scatter(n: number): Shape {
  return build(n, () => [rand(-2.8, 2.8), rand(-1.7, 1.7), rand(-1.5, 1.5)]);
}

// Light bulb as a surface of revolution, plus a glowing filament inside.
function bulbRadius(y: number): number {
  if (y >= 0) return Math.sqrt(Math.max(0, 0.72 * 0.72 - (y - 0.3) * (y - 0.3)));
  if (y >= -0.55) {
    const t = -y / 0.55;
    return 0.654 + (0.3 - 0.654) * (1 - (1 - t) * (1 - t));
  }
  if (y >= -1) return 0.3 + 0.025 * Math.sin(y * 60);
  return 0.3 * Math.max(0, 1 - (-1 - y) / 0.14);
}

export function lightbulb(n: number): Shape {
  return build(n, () => {
    if (Math.random() < 0.06) {
      const t = Math.random();
      if (t < 0.5) {
        const x = rand(-0.22, 0.22);
        return [x, 0.32 + 0.06 * Math.sin(x * 40), rand(-0.02, 0.02)];
      }
      const side = t < 0.75 ? -0.2 : 0.2;
      return [side, rand(-0.55, 0.3), rand(-0.02, 0.02)];
    }
    let y = 0;
    let r = 0;
    do {
      y = rand(-1.14, 1.02);
      r = bulbRadius(y);
    } while (Math.random() > r / 0.75);
    const th = rand(0, TAU);
    const shell = rand(0.93, 1);
    return [Math.cos(th) * r * shell, y + 0.05, Math.sin(th) * r * shell];
  });
}

// Globe: random surface points reinforced along latitude and longitude lines.
export function globe(n: number): Shape {
  const R = 1.05;
  return build(n, () => {
    const r = Math.random();
    if (r < 0.2) {
      const lat = (Math.floor(rand(0, 7)) - 3) * 0.38;
      const th = rand(0, TAU);
      return [Math.cos(th) * Math.cos(lat) * R, Math.sin(lat) * R, Math.sin(th) * Math.cos(lat) * R];
    }
    if (r < 0.4) {
      const lon = Math.floor(rand(0, 10)) * (Math.PI / 10);
      const phi = rand(0, TAU);
      return [Math.cos(phi) * Math.cos(lon) * R, Math.sin(phi) * R, Math.cos(phi) * Math.sin(lon) * R];
    }
    const [dx, dy, dz] = randomDirection();
    return [dx * R, dy * R, dz * R];
  });
}

// The "</>" code glyph, drawn as thick strokes with some depth.
const CODE_SEGMENTS: [number, number, number, number][] = [
  [-0.55, 0.62, -1.25, 0],
  [-1.25, 0, -0.55, -0.62],
  [0.28, 0.85, -0.28, -0.85],
  [0.55, 0.62, 1.25, 0],
  [1.25, 0, 0.55, -0.62],
];
const CODE_LENGTHS = CODE_SEGMENTS.map(([x1, y1, x2, y2]) => Math.hypot(x2 - x1, y2 - y1));
const CODE_TOTAL = CODE_LENGTHS.reduce((a, b) => a + b, 0);

export function codeGlyph(n: number): Shape {
  return build(n, () => {
    let pick = Math.random() * CODE_TOTAL;
    let k = 0;
    while (pick > CODE_LENGTHS[k] && k < CODE_SEGMENTS.length - 1) {
      pick -= CODE_LENGTHS[k];
      k++;
    }
    const [x1, y1, x2, y2] = CODE_SEGMENTS[k];
    const t = Math.random();
    const len = CODE_LENGTHS[k];
    const nx = -(y2 - y1) / len;
    const ny = (x2 - x1) / len;
    const off = rand(-0.08, 0.08);
    return [x1 + (x2 - x1) * t + nx * off, y1 + (y2 - y1) * t + ny * off, rand(-0.18, 0.18)];
  });
}

// Tilted ring that opens up, with part of the particles drifting away from it.
export function ring(n: number): Shape {
  const tilt = 1.15;
  const cos = Math.cos(tilt);
  const sin = Math.sin(tilt);
  return build(n, () => {
    const th = rand(0, TAU);
    const spread = Math.random() < 0.7 ? rand(-0.12, 0.12) : rand(0.15, 1.3);
    const radius = 1.2 + spread;
    const x = Math.cos(th) * radius;
    const z = Math.sin(th) * radius;
    const y = rand(-0.08, 0.08) * (1 + Math.abs(spread) * 3);
    return [x, y * cos - z * sin, y * sin + z * cos];
  });
}
