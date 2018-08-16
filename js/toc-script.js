/*
 * toc-script.js
 *
 * script from Go Make Things email.
 *
 */

;(function (window, document, undefined) {

  'use strict';

  // Get all of the headings
  var headings = document.querySelectorAll( 'h2, h3, h4, h5, h6' );
  if ( headings.length < 1 ) return;

  // Create the links
  var links = '';
  for ( var i = 0; i < headings.length; i++ ) {
    links += '<li><a href="#' + headings[i].id + '">' + headings[i].innerHTML + '</a></li>';
  }

  // Get TOC container
  var toc = document.querySelector( '[data-toc]' );
  if ( !toc ) return;

  // Inject TOC into the DOM
  toc.innerHTML = '<h2>Table of Contents</h2><ul>' + links + '</ul>';

})(window, document);
