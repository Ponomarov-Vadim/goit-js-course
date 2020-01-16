"use strict";
let input = prompt("Enter the number");
let total = 0;
while (input !== null) {
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total += Number.parseInt(input);
  }
  input = prompt("Enter the number");
}
alert(`Общая сумма чисел равна ${total}`);
