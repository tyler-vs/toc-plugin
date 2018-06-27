/*
 * side-nav.js
 */

'use strict';


class SideNav {

  constructor() {
    this.showButtonEl = document.querySelector('.js-menu-show');
    this.hideButtonEl = document.querySelector('.js-menu-hide');
    this.sideNavEl = document.querySelector('.js-side-nav');
    this.sideNavContainer = document.querySelector('.js-side-nav-container');

    this.showSideNav = this.showSideNav.bind(this);
    this.hideSideNav = this.hideSideNav.bind(this);
    this.blockClicks = this.blockClicks.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);

    this.startX = 0;
    this.currentX = 0;

    this.addEventListeners();
  }

  addEventListeners() {
    this.showButtonEl.addEventListener('click', this.showSideNav);
    this.hideButtonEl.addEventListener('click', this.hideSideNav);
    this.sideNavEl.addEventListener('click', this.hideSideNav);
    this.sideNavContainer.addEventListener('click', this.blockClicks);

    // this.sideNavContainer.addEventListener('touchstart', this.onTouchStart);
    // this.sideNavContainer.addEventListener('touchmove', this.onTouchMove);
    // this.sideNavContainer.addEventListener('touchmove', this.onTouchEnd);
    document.addEventListener('touchstart', this.onTouchStart);
    document.addEventListener('touchmove', this.onTouchMove);
    document.addEventListener('touchmove', this.onTouchEnd);
  }

  onTouchStart (evt) {
    if (!this.sideNavEl.classList.contains('side-nav--visible')) {
      return;
    }
    // do not want to register taps
    evt.preventDefault();
    // console.log(evt);
    this.startX = evt.touches[0].pageX;
    this.currentX = this.startX;
  }

  onTouchMove (evt) {
    this.currentX = evt.touches[0].pageX;

    const translateX = Math.min(0, this.currentX - this.startX);
    // console.log(translateX);

    if (translateX < 0) {
      evt.preventDefault();
    }

    this.sideNavContainer.style.transform = `translateX(${translateX}px)`;
    // game loop here, req animation frame style
  }

  // upon letting go, touch, will reset
  onTouchEnd (evt) {
    const translateX = Math.min(0, this.currentX - this.startX);
    if (translateX < 0) {
      this.sideNavContainer.style.transform = '';
      this.hideSideNav();
    }
  }

  /**
   * Prevent side nav from closing from clicking on the side nav
   * buttons while in an open state.
   * @param  {[type]} evt event emitted from clicked element.
   * @return {[type]}     [description]
   */
  blockClicks (evt) {
    evt.stopPropagation();
  }

  onTransitionEnd (evt) {
    this.sideNavEl.classList.remove('side-nav--animatable');
    this.sideNavEl.removeEventListener('transitionend', this.onTransitionEnd);
  }

  showSideNav() {
    this.sideNavEl.classList.add('side-nav--animatable');
    this.sideNavEl.classList.add('side-nav--visible');
    this.sideNavEl.addEventListener('transitionend', this.onTransitionEnd);
  }

  hideSideNav() {
    this.sideNavEl.classList.add('side-nav--animatable');
    this.sideNavEl.classList.remove('side-nav--visible');
    this.sideNavEl.addEventListener('transitionend', this.onTransitionEnd);
    // this.sideNavEl.classList.add('side-nav__container--animatable');
  }
}

var sideNav = new SideNav();

setTimeout(function() {
  sideNav.showSideNav();
}, 5000);
