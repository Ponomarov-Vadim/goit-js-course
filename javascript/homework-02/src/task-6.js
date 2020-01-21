"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Enter the number");
  if (input !== null) {
    if (isNaN(input)) {
      alert("Было введено не число, попробуйте еще раз");
    } else {
      numbers.push(input);
    }
  }
} while (input !== null);

if (numbers.length !== 0) {
  for (const num of numbers) {
    total += Number(num);
  }
} else {
  alert("Массив чисел пуст!");
}
console.log(`Общая сумма чисел равна ${total}`);
