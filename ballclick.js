let number = 15;
const Timer = document.getElementById("Timer");
const Count = document.getElementById("Count");

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth-50;
canvas.height = window.innerHeight-160;
console.log(canvas.width, canvas.height);
let = radiusa = 70;
let notClick = false;
let centerX = positionX();
let centerY = positionY();

function positionX() {
  return (Math.floor(Math.random() * (canvas.width - radiusa + 100)) + radiusa)-50;
}
function positionY() {
  return (Math.floor((Math.random() * (canvas.height - radiusa + 100)) + radiusa))-160;
}

function d(e){
  centerX = positionX();
  centerY = positionY();
  console.log(number);
  number = number + 1;
drawCircle("red")}

//setInterval(d, 1000);

function drawCircle(color) {
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  c.arc(centerX, centerY, radiusa, 0, 2 * Math.PI);
  c.fillStyle = color;
  c.fill();
}

console.log(centerX, centerY);
function hoverCircle(e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  console.log("hoverBackground");
  const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
  if (distanceFromCenter <= radiusa) {
    radiusa = 80;
    drawCircle("green");
  }
  else{
    radiusa = 70;
    drawCircle("red");
  }
}

function newPosition(e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
  if (distanceFromCenter <= radiusa) {
    centerX = positionX();
    centerY = positionY();
    console.log(canvas.width, canvas.height);
    console.log(centerX, centerY);

    number += 1;
    notClicked = true;
    drawCircle("red");
  }
}
function resizeCanvas(){
  canvas.width = window.innerWidth-100;
  canvas.height = window.innerHeight-500;
}

drawCircle("red");
canvas.addEventListener("click", newPosition);
canvas.addEventListener("mousemove", hoverCircle); //hoverCircle(radiusa));
window.addEventListener("resize", resizeCanvas);