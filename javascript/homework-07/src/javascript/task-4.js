"use strict";

const btnIncrement = document.querySelector(
  '#counter button[data-action="increment"]'
);

const btnDecrement = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const span = document.querySelector("#value");

let counter = 0;

const increment = function() {
  span.textContent = ++span.textContent;
  counter = span.textContent;
};
const decrement = function() {
  span.textContent = --span.textContent;
  counter = span.textContent;
};

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);
