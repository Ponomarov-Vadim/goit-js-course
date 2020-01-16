"use strict";
const ADMIN_PASSWORD = "qwe123";
let password = prompt("Input your password");
let message;
if (password === null) {
  message = "Отменено пользователем!";
} else if (password === "qwe123") {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
