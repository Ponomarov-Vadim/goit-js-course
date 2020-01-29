"use strict";

const input = document.querySelector("#validation-input");

const validInput = function(e) {
  if (e.target.value.length > input.getAttribute("data-length")) {
    input.setAttribute("class", "valid");
    return;
  }
  input.setAttribute("class", "invalid");
};

input.addEventListener("blur", validInput);
