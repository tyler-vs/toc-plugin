/*
 * side-nav.js
 */

'use strict';


class SideNav {

  constructor() {
    this.showButtonEl = document.querySelector('.js-menu-show');
    this.hideButtonEl = document.querySelector('.js-menu-hide');
    this.sideNavEl = document.querySelector('.js-side-nav');

    this.showSideNav = this.showSideNav.bind(this);
    this.hideSideNav = this.hideSideNav.bind(this);

    this.addEventListeners();
  }

  addEventListeners() {
    this.showButtonEl.addEventListener('click', this.showSideNav);
    this.hideButtonEl.addEventListener('click', this.hideSideNav);
  }

  showSideNav() {
    this.sideNavEl.classList.add('side-nav--visible');
  }

  hideSideNav() {
    this.sideNavEl.classList.remove('side-nav--visible');
  }
}

new SideNav();
