"use strict";

import galleryItems from "./gallery-items.js";

import Element from "./task-class.js";

const jsGalery = document.querySelector(".js-gallery");

jsGalery.append(
  ...galleryItems.map(item => {
    return new Element(item).createElement();
  })
);

// -----------------------------------------
const openModal = function(e) {
  lightboxDiv.classList.add("is-open");
  lightboxImage.src = e.target.dataset.source;
  e.preventDefault();
};

jsGalery.addEventListener("click", openModal);
// -----------------------------------------

const lightboxImage = document.querySelector("img.lightbox__image");

const lightboxDiv = document.querySelector("div.lightbox");

const closeButton = document.querySelector(
  'button[data-action="close-lightbox"]'
);

const lightboxOverlay = document.querySelector("div.lightbox__content");

const closeModal = function(e) {
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

document.addEventListener("keydown", doAnythin.bind(galleryItems));

const overlayClick = function(e) {
  if (e.target.classList.value === "lightbox__content") {
    closeModal(e);
  }
};

lightboxOverlay.addEventListener("click", overlayClick);
