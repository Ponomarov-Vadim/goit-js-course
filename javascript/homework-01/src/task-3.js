"use strict";
const ADMIN_PASSWORD = "qwe123";
const PASSWORD = prompt("Input your password");
let message;
if (PASSWORD === null) {
  message = "Отменено пользователем!";
} else if (PASSWORD === "qwe123") {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
