"use strict";
let total = 80;
let ordered = 20;

WhoIsBigger(total, ordered);
ordered = 80;
WhoIsBigger(total, ordered);
ordered = 130;
WhoIsBigger(total, ordered);

function WhoIsBigger(total, ordered) {
  if (total >= ordered) {
    console.log("Заказ оформлен, с вами свяжется менеджер");
  } else {
    console.log("На складе недостаточно твоаров!");
  }
}
