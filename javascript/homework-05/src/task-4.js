"use strict";

class StringBuilder {
  constructor(str) {
    this._value = str;
  }

  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }

  append(str) {
    this.value += str;
  }

  prepend(str) {
    this.value = str + this.value;
  }

  pad(str) {
    this.value += str;
    this.value = str + this.value;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
