"use strict";

let credits = 23580;
const PRICE_PER_DROID = 3000;
let totalPrice = 0;
const USER_INPUT = prompt("How much droids you want to buy?");

if (USER_INPUT === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = PRICE_PER_DROID * Number.parseInt(USER_INPUT);

  if (totalPrice <= credits) {
    credits -= totalPrice;
    console.log(
      `Вы купили ${Number.parseInt(USER_INPUT)} дроидов, 
      на счету осталось ${credits} кредитов.`
    );
  } else {
    console.log("Недостаточно средств на счету!");
  }
}
