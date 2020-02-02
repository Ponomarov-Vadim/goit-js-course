"use strict";

const btnIncrement = document.querySelector(
  '#counter button[data-action="increment"]'
);

const btnDecrement = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const span = document.querySelector("#value");

const counter = {
  increment() {
    span.textContent = ++span.textContent;
  },
  decrement() {
    span.textContent = --span.textContent;
  }
};

btnIncrement.addEventListener("click", counter.increment);
btnDecrement.addEventListener("click", counter.decrement);
