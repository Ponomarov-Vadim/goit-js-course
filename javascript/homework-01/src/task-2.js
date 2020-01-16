"use strict";
const TOTAL = 80;
let ordered = 20;

WhoIsBigger(TOTAL, ordered);
ordered = 80;
WhoIsBigger(TOTAL, ordered);
ordered = 130;
WhoIsBigger(TOTAL, ordered);

function WhoIsBigger(total, ordered) {
  if (total >= ordered) {
    console.log("Заказ оформлен, с вами свяжется менеджер");
  } else {
    console.log("На складе недостаточно твоаров!");
  }
}
