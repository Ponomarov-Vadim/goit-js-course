"use strict";

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector('#name-output');

const outFunc = function(e) {
    if (e.target.value !== "") {
        nameOutput.textContent = e.target.value;
        return;
    }
    nameOutput.textContent = "незнакомец";
}

nameInput.addEventListener('input', outFunc);