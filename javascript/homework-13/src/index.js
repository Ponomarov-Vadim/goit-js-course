import './styles.css';
import cardTemplate from './cardTemplate.hbs';
import axios from 'axios';
import * as basicLightbox from 'basiclightbox';

const BASE_URL = ' https://pixabay.com/api/';
const KEY = '15725306-bc876a9032cf9c2bacf7059da';

const loadButton = document.querySelector('.load');
const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const input = document.querySelector('input');

let searchWord = '';
let perPage = 0;

loadButton.style.display = 'none';

const showImages = function (e) {
  e.preventDefault();
  perPage += 1;
  if (e.type === 'submit') {
    gallery.innerHTML = '';
    searchWord = input.value;
    perPage = 1;
  }

  axios
    .get(`${BASE_URL}?key=${KEY}&q=${searchWord}&per_page=12&page=${perPage}`)
    .then(res => {
      gallery.insertAdjacentHTML(
        'beforeend',
        res.data.hits.reduce(
          (markup, img) => `${markup}${cardTemplate(img)}`,
          '',
        ),
      );

      if (perPage > 1) {
        window.scrollTo({
          top: window.scrollY - 60,
          left: 0,
        });
        setTimeout(() => {
          window.scrollTo({
            top: window.scrollY + window.innerHeight,
            left: 0,
            behavior: 'smooth',
          });
        }, 500);
      }
    });

  input.value = '';
  loadButton.style.display = 'inline';
};

let modal;

const showModal = function (e) {
  if (e.target.tagName === 'IMG') {
    modal = basicLightbox.create(
      `<img src="${e.target.dataset.source}" alt="${e.target.alt}"/>`,
      {
        closable: false,
      },
    );
    modal.show();
  }
};

const closeModal = function () {
  if (modal) {
    modal.close();
  }
};

gallery.addEventListener('click', showModal);
form.addEventListener('submit', showImages);
document.addEventListener('keydown', closeModal);
loadButton.addEventListener('click', showImages);
