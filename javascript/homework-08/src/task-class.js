"use strict";
export default class Element {
  constructor(galleryItem) {
    this._galleryItem = galleryItem;
  }

  createImageItem() {
    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = this._galleryItem.preview;
    img.dataset.source = this._galleryItem.original;
    img.alt = this._galleryItem.description;
    return img;
  }

  createLinkItem() {
    const a = document.createElement("a");
    a.classList.add("gallery__link");
    a.href = this._galleryItem.original;
    return a;
  }

  createGaleryItems() {
    const li = document.createElement("li");
    li.classList.add("gallery__item");
    return li;
  }

  createElement() {
    const link = this.createLinkItem();
    const li = this.createGaleryItems();
    link.appendChild(this.createImageItem());
    li.appendChild(link);
    return li;
  }
}
