/**
 * Lightweight canvas-based confetti particle animation.
 * Zero external dependencies.
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  vRotation: number;
  alpha: number;
}

const COLORS = [
  '#4f46e5', // indigo-600
  '#6366f1', // indigo-500
  '#818cf8', // indigo-400
  '#d97706', // amber-600
  '#f59e0b', // amber-500
  '#10b981', // emerald-500
  '#ec4899', // pink-500
];

export function fireConfetti(durationMs = 2500): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    canvas.remove();
    return;
  }

  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const particles: Particle[] = [];
  const particleCount = Math.min(100, Math.floor(width / 10));

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: width * (0.3 + Math.random() * 0.4),
      y: height * 0.4,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.8) * 14,
      size: Math.random() * 8 + 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]!,
      rotation: Math.random() * Math.PI * 2,
      vRotation: (Math.random() - 0.5) * 0.2,
      alpha: 1,
    });
  }

  const startTime = Date.now();

  function render() {
    if (!ctx) return;
    const elapsed = Date.now() - startTime;
    if (elapsed >= durationMs) {
      canvas.remove();
      return;
    }

    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25; // gravity
      p.rotation += p.vRotation;
      if (elapsed > durationMs * 0.6) {
        p.alpha = Math.max(0, 1 - (elapsed - durationMs * 0.6) / (durationMs * 0.4));
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
