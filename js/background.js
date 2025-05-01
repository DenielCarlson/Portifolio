const canvas = document.getElementById("backgroud-stars");

let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let width = canvas.width;
let height = canvas.height;

let stars = [];

setStars();

draw();

window.addEventListener("resize", resizeCanvas);

/**
 *
 *
 *
 *
 */

function setStars() {
  for (let i = 0; i < 200; i++) {
    stars[i] = {
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2,

      vy: 0.1,
    };
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  width = canvas.width;
  height = canvas.height;

  setStars();
}

function draw() {
  ctx.clearRect(0, 0, width, height);

  stars.forEach((star) => {
    if (star.y < canvas.height) {
      star.y += 1 * star.vy;
    } else {
      star.y = -1;
    }

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  });

  requestAnimationFrame(draw);
}
