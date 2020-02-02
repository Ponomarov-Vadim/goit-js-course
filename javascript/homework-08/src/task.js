"use strict";
import galleryItems from "./gallery-items.js";

const jsGalery = document.querySelector(".js-gallery");

const lightboxImage = document.querySelector("img.lightbox__image");

const lightboxDiv = document.querySelector("div.lightbox");

const closeButton = document.querySelector(
  'button[data-action="close-lightbox"]'
);

const createImageItem = function(galleryItem) {
  var img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = galleryItem.preview;
  img.dataset.source = galleryItem.original;
  img.alt = galleryItem.description;
  return img;
};

const createLinkItem = function(galleryItem) {
  var a = document.createElement("a");
  a.classList.add("gallery__link");
  a.href = galleryItem.original;
  return a;
};

const createGaleryItems = function(galleryItems) {
  const imagesList = [];
  for (let i = 0; i < galleryItems.length; i++) {
    var li = document.createElement("li");
    li.classList.add("gallery__item");

    var link = createLinkItem(galleryItems[i]);
    var img = createImageItem(galleryItems[i]);

    link.appendChild(img);
    li.appendChild(link);
    imagesList.push(li);
  }
  return imagesList;
};

jsGalery.append(...createGaleryItems(galleryItems));
// -----------------------------------------
const openModal = function(e) {
  lightboxDiv.classList.add("is-open");
  lightboxImage.src = e.target.dataset.source;
  e.preventDefault();
};

jsGalery.addEventListener("click", openModal);
// -----------------------------------------
const closeModal = function() {
  lightboxDiv.classList.remove("is-open");
  lightboxImage.src = "";
};

closeButton.addEventListener("click", closeModal);

const changeImage = function(currentImage, keyCode) {
  const allImages = galleryItems.map(item => item.original);
  for (let i = 0; i < allImages.length; i++) {
    if (allImages[i] === currentImage) {
      if (keyCode == "ArrowLeft") {
        lightboxImage.src =
          i !== 0 ? allImages[i - 1] : allImages[allImages.length - 1];
        return;
      }
      if (keyCode == "ArrowRight") {
        lightboxImage.src =
          i !== allImages.length - 1 ? allImages[i + 1] : allImages[0];
        return;
      }
    }
  }
};

const doAnythin = function(e) {
  if (lightboxDiv.classList.contains("is-open")) {
    if (e.code === "Escape") {
      closeModal();
      return;
    }
    if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
      changeImage(lightboxImage.src, e.code);
      return;
    }
  }
};

lightboxDiv.addEventListener("click", closeModal);
document.addEventListener("keydown", doAnythin.bind(galleryItems));
