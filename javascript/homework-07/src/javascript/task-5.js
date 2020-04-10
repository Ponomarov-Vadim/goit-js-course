"use strict";

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const outFunc = function(e) {
  nameOutput.textContent =
    e.target.value !== "" ? e.target.value : "незнакомец";
};

nameInput.addEventListener("input", outFunc);
