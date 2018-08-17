
# [TOC Plugin](https://github.com/tyler-vs/toc-plugin)

A JavaScript plugin that generates a Table of Contents listing based off the HTML header elements within a document. Based off of the plugin built in the [Vanilla JS Crash Course](https://github.com/cferdinandi/vanilla-js-crash-course) by [Chris Ferdinandi](https://github.com/cferdinandi).

## Getting Started

### Include the plugin's script files

This code adds the required files to the webpage. These files need to be included before initializing the slider.

```html

<script src="js/toc-script.js"></script>

```

### Initialize the plugin

This code tells the webpage to start the plugin setup. Without this code the plugin would not be visible on the page.

```html

<script>
  tocPlugin.init(myPluginOptionsObj);
</script>

```

#### Optionally pass in user configurations

Pass in a JS object with configuration options.

```html

<script>
  var myPluginOptionsObj = {
    // Selectors
    selectorHeaders: 'h2, h3, h4, h5, h6',
    selectorTocs: '[data-toc]',

    // Classes
    initClass: 'js-toc-custom',
  }
  tocPlugin.init(myPluginOptionsObj);
</script>

```

### Create the HTML for the plugin

This is the code that the slider plugin will use to generate the Table of Contents.

```html

<div data-toc></div>

```

## Credits

- __[Chris Ferdinandi](https://github.com/cferdinandi)__, original plugin creator.
- __[Vanilla JS Crash Course](https://github.com/cferdinandi/vanilla-js-crash-course)__, course used to develop the plugin.
- __[bxSlider](https://bxslider.com/install/)__, emulated their plugins documentation for the "Getting Started" section.

