"use strict";

let credits = 23580;
let pricePerDroid = 3000;
let totalPrice = 0;
let userInput = prompt("How much droids you want to buy?");

if (userInput === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = pricePerDroid * Number.parseInt(userInput);

  if (totalPrice <= credits) {
    credits -= totalPrice;
    console.log(
      `Вы купили ${Number.parseInt(userInput)} дроидов, 
      на счету осталось ${credits} кредитов.`
    );
  } else {
    console.log("Недостаточно средств на счету!");
  }
}
