<div align="center">
  
![Logo](https://github.com/wbunting/bridgecss/raw/master/packages/docs/static/logo.png)

## BridgeCSS 

[![npm version](http://img.shields.io/npm/v/bridgecss.svg)](https://npmjs.org/package/bridgecss)
  
</div>

# BridgeCSS

> Note: This project is dual licensed under the GPL and a proprietary license available for purchase. This means if you intend to use this library in non-free software you must pay the licensing fee.

BridgeCSS is a lightweight set of SCSS mixins and variables that allow for the rapid development of websites and web-based applications. 

## Philosophy

BridgeCSS was grown out of a simultaneous admiration and frustration with utility-first CSS frameworks like Tailwindcss. Those kinds of frameworks solved two problems simultaneously:

1. Making it super easy to get started with CSS via predefined colors, fonts, spacing scales etc (essentially a very un-opinionated design system)
2. Applying that design system via utility classes

BridgeCSS seeks to maintain 1. while using a more traditional approach to CSS for 2. (this is a similar approach as [OpenProps](https://open-props.style/), although we have more power since we can use full SCSS instead of just vanilla CSS).

With Bridge we wanted it to be possible to write CSS like:

```scss
.element {
  color: $gray-900;
  background-color: $gray-100;
  @include pxy(3, 4);

  @include tablet {
    @include pxy(6, 8);
  }

  @include dark {
    color: $gray-300;
    background-color: $gray-900;
  }
}
```

The CSS is just plain SCSS but comes with a whole host of mixins and variables that help with things like responsive design, dark mode, spacing etc. 

We have written in more detail about the philosophy [here]().

## Documentation

The full documentation for BridgeCSS can be found [here](https://bridgecss.com/docs/getting-started). It will guide you through the setup process as well as understanding all the available variables / styles.

## A note on Licensing

In order to make this project sustainable, we felt it a good idea to have a GPL version for free software usage. This should make it possible to not block any independent users from building on Bridge as long as they release their source code. However, since CSS is not a large threat to user freedom (due to the limited eg. spying capabilities that it has compared with Javascript) we could release a Proprietary license for corporations who wish to style their sties using Bridge (but were otherwise unlikely to release their source code). 
