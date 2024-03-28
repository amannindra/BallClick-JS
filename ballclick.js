let number = 15;
const Timer = document.getElementById("Timer");
const Count = document.getElementById("Count");

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas.width, canvas.height);
const radius = 70;
let centerX = positionX();
let centerY = positionY();

function positionX() {
  return radius + Math.random() * (canvas.width - 2 * radius);
}
function positionY() {
  return radius + Math.random() * (canvas.height - 2 * radius);
}

function drawCircle(color1) {
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  c.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  c.fillStyle = color1;
  c.fill();
}

drawCircle("red");
console.log(centerX, centerY);
function hoverCircle(e) {
  console.log("hoverBackground");
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
  if (distanceFromCenter <= radius) {
    console.log("greeeeen");
    radius = 80;
    drawCircle("green");
    e.target.style.transform = "scale(1.05, 1.05)";
 
  } else {
    radius = 70;
    drawCircle("red");
  }
}

function newPosition(e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
  if (distanceFromCenter <= radius) {
    centerX = positionX();
    centerY = positionY();
    number += 1;
    drawCircle("red");
  }
}
canvas.addEventListener("click", newPosition);
canvas.addEventListener("mousemove", hoverCircle);
