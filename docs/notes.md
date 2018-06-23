
# notes


using BEM for CSS
proto-duction code vs production code

## Using 102% for hiding box shadow

```css
.side-nav__container {
  …
  /*additional 2% to hide box shadow*/
  transform: translateX(-102%);
}
```

## using `js-` classes to html elements with interactive js capabilities

```html

<!-- js-side-nav used for JS script, the other class for CSS. -->
<aside class="js-side-nav side-nav">
    <nav class="side-nav__container">

```

## Routing events

…

## responsive css

```css
  width: 90%;
  max-width: 400px;

```

## `display:block` and `display: none`

these cause re-rendering, performance, esp. mobile devices.


