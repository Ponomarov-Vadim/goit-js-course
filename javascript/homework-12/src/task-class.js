'use strict';
export default class Element {
  constructor(countryItem) {
    this._countryItem = countryItem;
  }

  createImageItem() {
    const img = document.createElement('img');
    img.src = this._galleryItem.preview;
    img.alt = 'Country Flag';
    img.width = '300';
    img.height = '300';
    return img;
  }

  createDivItem() {
    const div = document.createElement('div');
    div.classList.add('main-info');
    return div;
  }

  createGaleryItems() {
    const li = document.createElement('li');
    li.classList.add('gallery__item');
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
