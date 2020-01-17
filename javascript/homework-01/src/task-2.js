"use strict";
const total = 80;
let ordered = 20;

for (let index = 0; index < 3; index++) {
  if (total >= ordered) {
    console.log("Заказ оформлен, с вами свяжется менеджер");
  } else {
    console.log("На складе недостаточно твоаров!");
  }

  ordered += 40;
}
