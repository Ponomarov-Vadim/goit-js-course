"use strict";

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;
const userInput = prompt("How much droids you want to buy?");

if (userInput === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = pricePerDroid * userInput;

  if (totalPrice <= credits) {
    console.log(
      `Вы купили ${userInput} дроидов, 
      на счету осталось ${(credits -= totalPrice)} кредитов.`
    );
  } else {
    console.log("Недостаточно средств на счету!");
  }
}
