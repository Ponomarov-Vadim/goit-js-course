"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const ingredientsList = document.querySelector("#ingredients");

const fragment = new DocumentFragment();

for (let i = 0; i < ingredients.length; i++) {
  var li = document.createElement("li");
  li.textContent = ingredients[i];
  fragment.append(li);
}

ingredientsList.appendChild(fragment);
