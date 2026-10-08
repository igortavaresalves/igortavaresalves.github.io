import { useEffect, useRef } from "react";
import { brain, codeGlyph, globe, lightbulb, ring, scatter, type Shape } from "./shapes";

// One particle system fixed behind the page. As you scroll, the particles
// morph into a different shape for each section.

type Stage = {
  id: string; // section element id
  make: (n: number) => Shape;
  cx: number; // anchor on screen, as a fraction of the viewport
  cy: number;
  scale: number;
  intensity: number; // overall opacity, lower behind long text
};

const STAGES: Stage[] = [
  { id: "top", make: brain, cx: 0.72, cy: 0.54, scale: 1, intensity: 1 },
  { id: "sobre", make: scatter, cx: 0.5, cy: 0.5, scale: 1.6, intensity: 0.35 },
  { id: "destaques", make: lightbulb, cx: 0.78, cy: 0.5, scale: 0.9, intensity: 0.55 },
  { id: "experiencia", make: globe, cx: 0.22, cy: 0.5, scale: 0.95, intensity: 0.5 },
  { id: "projetos", make: codeGlyph, cx: 0.76, cy: 0.5, scale: 0.85, intensity: 0.5 },
  { id: "contato", make: ring, cx: 0.5, cy: 0.5, scale: 1.1, intensity: 0.65 },
];

const COLORS = ["#ffb829", "#8052ff", "#b49cff", "#ffffff", "#2dd4bf", "#ff6fae"];
const COLOR_WEIGHTS = [0.32, 0.26, 0.14, 0.14, 0.09, 0.05];
const ALPHA_BUCKETS = 4;

function pickColor(): number {
  let r = Math.random();
  for (let i = 0; i < COLOR_WEIGHTS.length; i++) {
    r -= COLOR_WEIGHTS[i];
    if (r <= 0) return i;
  }
  return 0;
}

const smooth = (t: number) => t * t * (3 - 2 * t);
const clamp01 = (t: number) => Math.min(1, Math.max(0, t));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function addTriangle(path: Path2D, x: number, y: number, r: number, rot: number) {
  path.moveTo(x + r * Math.cos(rot), y + r * Math.sin(rot));
  path.lineTo(x + r * Math.cos(rot + 2.094), y + r * Math.sin(rot + 2.094));
  path.lineTo(x + r * Math.cos(rot + 4.189), y + r * Math.sin(rot + 4.189));
  path.closePath();
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 1023px)").matches;
    const count = mobile ? 1100 : 2400;

    const shapes = STAGES.map((s) => s.make(count));
    const pos = Float32Array.from(shapes[0]);
    const size = new Float32Array(count);
    const rot = new Float32Array(count);
    const spin = new Float32Array(count);
    const phase = new Float32Array(count);
    const color = new Uint8Array(count);
    for (let i = 0; i < count; i++) {
      size[i] = 1.6 + Math.random() * 2.6;
      rot[i] = Math.random() * Math.PI * 2;
      spin[i] = (Math.random() - 0.5) * 0.8;
      phase[i] = Math.random() * Math.PI * 2;
      color[i] = pickColor();
    }

    // Ambient specks across the whole screen, plus a few large drifting triangles.
    const ambient = Array.from({ length: mobile ? 70 : 150 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      size: i < 8 ? 9 + Math.random() * 9 : 1.5 + Math.random() * 2,
      big: i < 8,
      rot: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.3,
      phase: Math.random() * Math.PI * 2,
      color: pickColor(),
    }));

    let width = 0;
    let height = 0;
    let bounds: { top: number; bottom: number }[] = [];
    const view = { cx: STAGES[0].cx, cy: STAGES[0].cy, scale: 1, intensity: 1 };
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    let frame = 0;

    const measure = () => {
      bounds = STAGES.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return { top: 0, bottom: 0 };
        const r = el.getBoundingClientRect();
        return { top: r.top + window.scrollY, bottom: r.bottom + window.scrollY };
      });
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      measure();
      request();
    };

    // Which two stages we are between, and how far along the morph is.
    const currentStage = (): [number, number, number] => {
      const vh = window.innerHeight;
      const q = vh * 0.25;
      const point = window.scrollY + vh * 0.5;
      const last = STAGES.length - 1;
      if (window.scrollY + vh >= document.documentElement.scrollHeight - 4) return [last, last, 0];
      for (let k = 0; k <= last; k++) {
        const startHold = k === 0 ? -Infinity : bounds[k].top + q;
        if (point < startHold) {
          const from = Math.min(bounds[k - 1].bottom - q, startHold - 1);
          return [k - 1, k, smooth(clamp01((point - from) / (startHold - from)))];
        }
        if (point <= bounds[k].bottom - q || k === last) return [k, k, 0];
      }
      return [last, last, 0];
    };

    const draw = (time: number) => {
      const [a, b, t] = currentStage();
      const A = shapes[a];
      const B = shapes[b];
      const sa = STAGES[a];
      const sb = STAGES[b];
      const ease = reduceMotion ? 1 : 0.07;

      const target = {
        cx: mobile ? 0.5 : lerp(sa.cx, sb.cx, t),
        cy: mobile && a === 0 && b === 0 ? 0.68 : lerp(sa.cy, sb.cy, t),
        scale: lerp(sa.scale, sb.scale, t),
        intensity: lerp(sa.intensity, sb.intensity, t) * (mobile ? 0.55 : 1),
      };
      view.cx += (target.cx - view.cx) * ease;
      view.cy += (target.cy - view.cy) * ease;
      view.scale += (target.scale - view.scale) * ease;
      view.intensity += (target.intensity - view.intensity) * ease;

      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;

      const S = Math.min(width * (mobile ? 0.42 : 0.2), height * 0.36) * view.scale;
      const cx = width * view.cx;
      const cy = height * view.cy;
      const rotY = (reduceMotion ? 0.6 : time * 0.12) + pointer.x * 0.35;
      const tilt = -0.12 + pointer.y * 0.15;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(tilt);
      const sinX = Math.sin(tilt);
      const sizeScale = Math.max(0.7, S / 260);

      // Group strokes by color and opacity so each frame is only a few dozen draw calls.
      const paths = Array.from({ length: COLORS.length * ALPHA_BUCKETS }, () => new Path2D());

      for (let i = 0; i < count; i++) {
        const j = i * 3;
        const wob = reduceMotion ? 0 : Math.sin(time * 0.8 + phase[i]) * 0.012;
        pos[j] += (A[j] + (B[j] - A[j]) * t - pos[j]) * ease;
        pos[j + 1] += (A[j + 1] + (B[j + 1] - A[j + 1]) * t - pos[j + 1]) * ease;
        pos[j + 2] += (A[j + 2] + (B[j + 2] - A[j + 2]) * t - pos[j + 2]) * ease;

        const x0 = pos[j] + wob;
        const y0 = pos[j + 1] + wob;
        const z0 = pos[j + 2];
        const x1 = x0 * cosY + z0 * sinY;
        const z1 = -x0 * sinY + z0 * cosY;
        const y2 = y0 * cosX - z1 * sinX;
        const z2 = y0 * sinX + z1 * cosX;

        const f = 3.2 / (3.2 + z2);
        const sx = cx + x1 * f * S;
        const sy = cy - y2 * f * S;
        if (sx < -20 || sx > width + 20 || sy < -20 || sy > height + 20) continue;

        const near = clamp01((1.6 - z2) / 3.2);
        const twinkle = reduceMotion ? 1 : 0.75 + 0.25 * Math.sin(time * 1.3 + phase[i]);
        const alpha = (0.2 + 0.8 * near) * twinkle;
        const bucket = Math.min(ALPHA_BUCKETS - 1, Math.floor(alpha * ALPHA_BUCKETS));
        addTriangle(paths[color[i] * ALPHA_BUCKETS + bucket], sx, sy, size[i] * f * sizeScale, rot[i] + time * spin[i]);
      }

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      for (let c = 0; c < COLORS.length; c++) {
        ctx.strokeStyle = COLORS[c];
        for (let k = 0; k < ALPHA_BUCKETS; k++) {
          ctx.globalAlpha = ((k + 1) / ALPHA_BUCKETS) * view.intensity;
          ctx.stroke(paths[c * ALPHA_BUCKETS + k]);
        }
      }

      const scrollShift = window.scrollY / Math.max(1, height);
      for (const p of ambient) {
        const drift = reduceMotion ? 0 : Math.sin(time * 0.3 + p.phase) * 0.01;
        const y = (((p.y - scrollShift * (0.04 + p.z * 0.1) + drift) % 1) + 1) % 1;
        const x = p.x + (reduceMotion ? 0 : Math.cos(time * 0.2 + p.phase) * 0.008) + pointer.x * 0.01 * p.z;
        const path = new Path2D();
        addTriangle(path, x * width, y * height, p.size, p.rot + time * p.spin);
        ctx.globalAlpha = p.big ? 0.5 : 0.25 + 0.2 * Math.sin(time + p.phase);
        ctx.lineWidth = p.big ? 1.5 : 1;
        ctx.strokeStyle = COLORS[p.color];
        ctx.stroke(path);
      }
      ctx.globalAlpha = 1;
    };

    const loop = (ms: number) => {
      draw(ms / 1000);
      frame = requestAnimationFrame(loop);
    };

    // With reduced motion there is no loop: redraw only when scrolling or resizing.
    function request() {
      if (reduceMotion) draw(0);
    }

    const onPointer = (e: PointerEvent) => {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const bodyRo = new ResizeObserver(measure);
    bodyRo.observe(document.body);
    resize();

    window.addEventListener("scroll", request, { passive: true });
    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointer);
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      bodyRo.disconnect();
      window.removeEventListener("scroll", request);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 h-full w-full pointer-events-none" aria-hidden="true" />;
}
