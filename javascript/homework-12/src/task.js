var debounce = require('lodash.debounce');

import { error } from '../node_modules/@pnotify/core/dist/PNotify.js';

import countryInfoTemplate from './templates/countryInfo.hbs';

const input = document.querySelector('#country-name');

const section = document.querySelector('.output-section');

function showCountryInfo(countryInfo) {
  section.innerHTML = '';
  section.innerHTML += countryInfoTemplate(countryInfo);
}

function showCountryList(countryList) {
  if (countryList.length < 10 && countryList.length > 1) {
    section.innerHTML = '';
    const ul = document.createElement('ul');
    ul.append(
      ...countryList.map(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        return li;
      }),
    );
    section.append(ul);
    return;
  }
  if (countryList.length === 1) {
    showCountryInfo(countryList[0]);
    return;
  }
  error({
    text: 'Too many matches found. Please enter a more specific query!',
  });
}

const nfunc = debounce(e => {
  fetch(
    `https://restcountries.eu/rest/v2/name/${e.target.value}`,
  ).then(response => response.json().then(data => showCountryList(data)));
}, 500);

input.addEventListener('input', nfunc);
