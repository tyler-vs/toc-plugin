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

    // Create the links
    var links = '';
    for (var i = 0; i < headings.length; i++) {
      links += '<li><a href="#' + headings[i].id + '">' + headings[i].innerHTML + '</a></li>';
    }

    // Get TOC container
    var toc = document.querySelector(settings.selectorTocs);
    if (!toc)
      return;

    // Inject TOC into the DOM
    toc.innerHTML = '<h2>Table of Contents</h2><ul>' + links + '</ul>';

  };

  var addInitializationClass = function() {
    document.documentElement.className += settings.initClass;
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




  /**
   * Public functions - accessible by other scripts outside plugin.
   */

  // Initialize our plugin
  // - feature testing (omitted)
  // - event listeners (omitted)
  // - initialization class
  publicAPIs.init = function(options) {


    // Merge user options with the defaults
    settings = extend(defaults, options || {});


    // run script
    runScript();

    // initialization class
    addInitializationClass();

    // console.log(`defaults: ${defaults}.`);
    // console.log(`settings: ${settings}.`);
  };

  // Return
  return publicAPIs;

})();// end myPlugin
