"use strict";

const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeFont = function(e) {
    text.style.fontSize = `${e.target.value}px`;
}

input.addEventListener('input', changeFont);