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
      console.dir(res.data.hits);
      gallery.insertAdjacentHTML(
        'beforeend',
        res.data.hits.reduce(
          (markup, img) => `${markup}${cardTemplate(img)}`,
          '',
        ),
      );
      if (perPage > 1) {
        setTimeout(() => {
          window.scrollTo({
            top: window.scrollY + window.innerHeight - 50,
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

const closeModal = function (e) {
  if (modal) {
    modal.close();
  }
};

const showPhotoCard = function (e) {
  if (e.target.tagName === 'IMG') {
    console.log(e.target.dataset.source);
  }
};

window.addEventListener('load', showPhotoCard);

gallery.addEventListener('click', showModal);
form.addEventListener('submit', showImages);
document.addEventListener('keydown', closeModal);
loadButton.addEventListener('click', showImages);
