/*
 * toc-script.js
 *
 * script from Go Make Things email.
 *
 */

// Revealing Module Pattern
var myPlugin = (function() {

'use strict';

// Public APIs
var publicAPIs = {};

/*Private functions - only accessible within plugin's script.*/

/**
 * [runScript description]
 * @return {[type]} [description]
 */
  var runScript = function() {

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

}

// Public functions - accessible by other scripts outside plugin.

// init()
publicAPIs.init = function() {
  runScript();
};

// Return
return publicAPIs;

})(); // end myPlugin
