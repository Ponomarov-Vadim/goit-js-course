"use strict";

import CountdownTimer from "./CountdownTimer.js";

const buttonStart = document.querySelector('button[data-action="start"]');
const buttonStop = document.querySelector('button[data-action="stop"]');
const inputDate = document.querySelector("input#targetDate");
let intervalId = null;

const intervalClear = function() {
  clearInterval(intervalId);
  buttonStart.disabled = false;
};

const createTimer = function() {
  if (inputDate.value !== "" && new Date(inputDate.value) > Date.now()) {
    buttonStart.disabled = true;
    const timer = new CountdownTimer({
      selector: "#timer-1",
      targetDate: new Date(inputDate.value)
    });
    timer.calculateTime();
    intervalId = setInterval(() => {
      if (!timer.decreaseTime()) {
        intervalClear();
      }
    }, 1000);
  } else {
    alert(
      "Не возможно установить таймер. Дата не указана или уже прошла, укажите другую дату!"
    );
  }
};

buttonStart.addEventListener("click", createTimer);
buttonStop.addEventListener("click", intervalClear);
