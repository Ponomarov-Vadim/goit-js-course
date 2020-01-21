"use strict";
let input;
let total = 0;

do {
  input = prompt("Enter the number");

  if (input !== null) {
    if (!Number.isNaN(+input)) {
      total += +input;
    } else {
      alert("Было введено не число, попробуйте еще раз");
    }
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
