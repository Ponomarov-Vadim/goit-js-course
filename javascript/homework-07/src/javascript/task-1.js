"use strict";

const section = document.querySelectorAll(".item");

console.log(`В списке ${section.length} категории.`);

section.forEach(item => {
  console.log(`Категория: ${item.querySelector("h2").textContent}`);
  console.log(
    `Количество элементов: ${item.querySelectorAll("ul > li").length}`
  );
});
