"use strict";
let input;
let total = 0;

do {
  input = prompt("Enter the number");

  if (input !== null) {
    if (Number(input).toString() !== "NaN") {
      total += Number.parseInt(input);
    } else {
      alert("Было введено не число, попробуйте еще раз");
    }
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
