/*
 * modal.js
 */


class Modal {

  constructor() {
    this.hideButtonEl = document.querySelector('.js-modal-hide');
    this.modalEl = document.querySelector('.js-modal');
    this.modalWindowEl = document.querySelector('.js-modal-window');
    this.modalContentEl = document.querySelector('.modal__content .lead');

    // this.modalContent = this.modalContentEl.

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.updateModalContent = this.updateModalContent.bind(this);

    this.addEventListeners();
  }

  addEventListeners() {
    this.hideButtonEl.addEventListener('click', this.hideModal);
    this.modalEl.addEventListener('click', this.hideModal);
    this.modalWindowEl.addEventListener('click', this.blockClicks);
  }

  blockClicks (evt) {
    evt.stopPropagation();
  }

  showModal() {
    this.modalEl.classList.add('modal--active');
  }

  hideModal() {
    this.modalEl.classList.remove('modal--active');
  }

  updateModalContent(str) {
    this.modalContentEl.textContent = str;
  }
}
