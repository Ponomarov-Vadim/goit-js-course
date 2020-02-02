"use strict";

const btnIncrement = document.querySelector(
  '#counter button[data-action="increment"]'
);

const btnDecrement = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const span = document.querySelector("#value");

const increment = function() {
  ++span.textContent;
};
const decrement = function() {
  --span.textContent;
};

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);
