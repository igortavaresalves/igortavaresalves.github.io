import { useEffect, useRef } from "react";

// Vivid spectrum for the outlined triangle particles.
const COLORS = ["#8052ff", "#a78bfa", "#6d5dfc", "#ffb829", "#15846e", "#2dd4bf", "#e879f9", "#60a5fa", "#ff6fae"];

type Particle = {
  x: number; // normalized position, roughly -1..1
  y: number;
  z: number; // depth, drives parallax
  size: number;
  rot: number;
  spin: number;
  color: string;
  phase: number;
  ambient: boolean;
};

// Lumpy brain silhouette (side view): cerebrum + cerebellum + stem.
function insideBrain(x: number, y: number): boolean {
  const theta = Math.atan2(y, x);
  const lump = 1 + 0.06 * Math.sin(5 * theta) + 0.04 * Math.sin(11 * theta + 1);
  const cerebrum = (x / 1.0) ** 2 + ((y + 0.08) / 0.7) ** 2 < lump * lump;
  const cerebellum = ((x - 0.48) / 0.34) ** 2 + ((y - 0.55) / 0.2) ** 2 < 1;
  const stem = x > 0.12 && x < 0.32 && y > 0.4 && y < 0.92 - (x - 0.12) * 0.6;
  return cerebrum || cerebellum || stem;
}

function createParticles(count: number, ambientCount: number): Particle[] {
  const particles: Particle[] = [];
  const pick = () => COLORS[Math.floor(Math.random() * COLORS.length)];

  while (particles.length < count) {
    const x = Math.random() * 2.2 - 1.1;
    let y = Math.random() * 2 - 1;
    // Some particles cluster along folds (gyri) for organic texture.
    if (Math.random() < 0.45) {
      const band = Math.floor(Math.random() * 6);
      y = -0.62 + band * 0.2 + Math.sin(x * 6 + band) * 0.07 + (Math.random() - 0.5) * 0.06;
    }
    if (!insideBrain(x, y)) continue;
    particles.push({
      x, y,
      z: Math.random(),
      size: 2 + Math.random() * 3.5,
      rot: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.6,
      color: pick(),
      phase: Math.random() * Math.PI * 2,
      ambient: false,
    });
  }

  for (let i = 0; i < ambientCount; i++) {
    particles.push({
      x: Math.random() * 3.2 - 1.6,
      y: Math.random() * 2.6 - 1.3,
      z: Math.random(),
      size: 2 + Math.random() * 2.5,
      rot: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.4,
      color: pick(),
      phase: Math.random() * Math.PI * 2,
      ambient: true,
    });
  }
  return particles;
}

function drawTriangle(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, rot: number) {
  ctx.moveTo(cx + r * Math.cos(rot), cy + r * Math.sin(rot));
  ctx.lineTo(cx + r * Math.cos(rot + 2.094), cy + r * Math.sin(rot + 2.094));
  ctx.lineTo(cx + r * Math.cos(rot + 4.189), cy + r * Math.sin(rot + 4.189));
  ctx.closePath();
}

export function Constellation({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 768;
    const particles = createParticles(small ? 650 : 1300, small ? 60 : 140);

    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduceMotion) draw(0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const scale = Math.min(width / 2.3, height / 2);
      const cx = width / 2;
      const cy = height / 2;
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;
      ctx.lineWidth = 1;

      for (const p of particles) {
        const drift = p.ambient ? 6 : 2.5;
        const depth = 6 + p.z * 18;
        const px = cx + p.x * scale + Math.sin(t * 0.5 + p.phase) * drift + pointer.x * depth;
        const py = cy + p.y * scale + Math.cos(t * 0.4 + p.phase) * drift + pointer.y * depth;
        const twinkle = 0.5 + 0.5 * Math.sin(t * 1.2 + p.phase);
        ctx.globalAlpha = p.ambient ? 0.15 + twinkle * 0.2 : 0.45 + twinkle * 0.55;
        ctx.strokeStyle = p.color;
        ctx.beginPath();
        drawTriangle(ctx, px, py, p.size, p.rot + t * p.spin);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    const loop = (ms: number) => {
      if (visible) draw(ms / 1000);
      frame = requestAnimationFrame(loop);
    };

    const onPointer = (e: PointerEvent) => {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointer);
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
