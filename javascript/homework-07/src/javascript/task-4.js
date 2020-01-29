"use strict";

const btnIncrement = document.querySelector(
    '#counter button[data-action="increment"]'
);

const btnDecrement = document.querySelector(
    '#counter button[data-action="decrement"]'
);
const span = document.querySelector("#value");

const counter = {
    counterValue: 0,
    increment() {
        this.counterValue++;
        span.textContent = this.counterValue;
    },
    decrement() {
        this.counterValue--;
        span.textContent = this.counterValue;
    }
};

btnIncrement.addEventListener("click", counter.increment.bind(counter));
btnDecrement.addEventListener("click", counter.decrement.bind(counter));