"use strict";

const renderBtn = document.querySelector(
  '#controls button[data-action="render"]'
);

const destroyBtn = document.querySelector(
  '#controls button[data-action="destroy"]'
);

const boxesDiv = document.querySelector("#boxes");

const numberInput = document.querySelector("#controls input");

const divControl = {
  size: 30,

  createBoxes(amount) {
    const boxes = new DocumentFragment();
    for (let i = 0; i < +amount; i++) {
      var div = document.createElement("div");
      div.style.height = `${this.size}px`;
      div.style.width = `${this.size}px`;
      div.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() *
        256},${Math.random() * 256})`;
      boxes.append(div);
      this.size += 10;
    }
    boxesDiv.appendChild(boxes);
  },

  destroyBoxes() {
    numberInput.value = "0";
    this.size = 30;
    while (boxesDiv.firstChild) {
      boxesDiv.removeChild(boxesDiv.firstChild);
    }
  }
};

renderBtn.addEventListener("click", function() {
  divControl.createBoxes(numberInput.value);
});

destroyBtn.addEventListener("click", divControl.destroyBoxes.bind(divControl));
