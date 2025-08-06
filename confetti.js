const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createConfetti() {
  const colors = ["#FF69B4", "#FF1493", "#FFB6C1", "#DB7093"];
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    c: colors[Math.floor(Math.random() * colors.length)],
    vx: Math.random() * 1 - 0.5,
    vy: Math.random() * 2 + 2
  };
}

function startConfetti() {
  particles = Array.from({ length: 150 }, createConfetti);
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
    ctx.fillStyle = p.c;
    ctx.fill();
    p.x += p.vx;
    p.y += p.vy;

    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animate);
}

startConfetti();