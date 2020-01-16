"use strict";
const logItems = function(array) {
  for (let index = 0; index < array.length; index++) {
    const message = `${index + 1} - ${array[index]}`;
    console.log(message);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
