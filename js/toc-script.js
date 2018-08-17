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
  var settings;


  // Defaults
  var defaults = {
    // Selectors
    selectorHeaders: 'h2, h3, h4, h5, h6',
    selectorTocs: '[data-toc]',

    primaryHeaderLevels: [1,2,3],

    // Classes
    initClass: 'js-toc',
  };



  /**
   * Private functions - only accessible within plugin's script.
   */

  /**
   * [runScript description]
   * @return {[type]} [description]
   */
  var runScript = function() {

    // Get all of the headings
    var headings = document.querySelectorAll(settings.selectorHeaders);
    if (headings.length < 1)
      return;

    // Add placeholder for for current heading level
    var level = 0;
    var newLevel;


    // Create the links
    var links = '';
    for (var i = 0; i < headings.length; i++) {

      // Get heading level
      newLevel = parseInt(headings[i].tagName.slice(1), 10);
      console.log(`newLevel: ${newLevel}.`);

      // If the heading has no ID, give it one
      if (!headings[i].id) {

        // Convert heading text to valid ID
        // Regex pattern: http://stackoverflow.com/a/9635698/1293256
        headings[i].id = headings[i].innerHTML.replace( /^[^a-z]+|[^\w:.-]+/gi, '_' ).toLowerCase();
      }

      // Creat list item with link
      // if ( newLevel > level ) {
      if ( newLevel > level && settings.primaryHeaderLevels.indexOf(newLevel) !== -1 ) {
        links += '<ul><li>';
        console.log(`A: Lvl: ${newLevel}, val: ${headings[i].textContent}.`);
      } else if ( newLevel < level ) {
        links += '</li></ul></li><li>';
        console.log(`B: Lvl: ${newLevel}, val: ${headings[i].textContent}.`);
      } else {
        links += '</li><li>';
        console.log(`C: Lvl: ${newLevel}, val: ${headings[i].textContent}.`);
      }

      links += '<a href="#' + headings[i].id + '">' + toTitleCase(headings[i].innerHTML) + '</a>';

      // Update the current level
      level = newLevel;

    }

    links += '</li></ul>';

    // Get TOC container
    var toc = document.querySelector(settings.selectorTocs);
    if (!toc)
      return;

    // Inject TOC into the DOM
    toc.innerHTML = '<h2>Table of Contents</h2>' + links;

  };


  var addInitializationClass = function() {
    document.documentElement.className += settings.initClass;
  };


  var removeInitializationClass = function() {
    if (document.documentElement.classList.contains(settings.initClass)) {
      document.documentElement.classList.remove(settings.initClass);
    }
  };


  // Merge two or more objects together
  var extend = function () {

    // Variables
    var extended = {};
    var deep = false;
    var i = 0;

    // Check if a deep merge
    if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
        deep = arguments[0];
        i++;
    }

    // Merge the object into the extended object
    var merge = function (obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          // If property is an object, merge properties
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
              extended[prop] = extend(extended[prop], obj[prop]);
          } else {
              extended[prop] = obj[prop];
          }
        }
      }
    };

    // Loop through each object and conduct a merge
    for (; i < arguments.length; i++) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;
  };

  /*!
   * Convert a string to title case
   * source: https://gist.github.com/SonyaMoisset/aa79f51d78b39639430661c03d9b1058#file-title-case-a-sentence-for-loop-wc-js
   * @param  {String} str The string to convert to title case
   * @return {String}     The converted string
   */
  var toTitleCase = function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  };



  /**
   * Public functions - accessible by other scripts outside plugin.
   */

  // Initialize our plugin
  // - feature testing (omitted)
  // - event listeners (omitted)
  // - initialization class
  publicAPIs.init = function(options) {

    // Good practice to destroy before initializing in case
    // it exists already
    publicAPIs.destroy();


    // Merge user options with the defaults
    settings = extend(defaults, options || {});


    // run script
    runScript();

    // initialization class
    addInitializationClass();

    // console.log(`defaults: ${defaults}.`);
    // console.log(`settings: ${settings}.`);
  };

  publicAPIs.destroy = function() {
    // only run is settings is set
    if(!settings) {
      return;
    }

    // remove event listeners
    // …

    // remove plugin code
    var toc = document.querySelector(settings.selectorTocs);
    if (!toc)
      return;

    // Inject TOC into the DOM
    toc.innerHTML = '';

    // remove initialization class
    removeInitializationClass();

    // reset settings
    settings = null;

  }

  // Return
  return publicAPIs;

})();// end myPlugin
