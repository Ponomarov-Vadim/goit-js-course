"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId;

const buttonStart = document.querySelector('button[data-action="start"]');
const buttonStop = document.querySelector('button[data-action="stop"]');

function changeColor() {
  buttonStart.disabled = true;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
}

buttonStart.addEventListener("click", changeColor);

buttonStop.addEventListener("click", () => {
  clearInterval(intervalId);
  buttonStart.disabled = false;
});
