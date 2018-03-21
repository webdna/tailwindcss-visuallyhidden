# Visually Hidden Utility Tailwind Plugin

## Overview

Hide only visually, but have it available for screen readers: https://snook.ca/archives/html_and_css/hiding-content-for-accessibility

For long content, line feeds are not interpreted as spaces and small width causes content to wrap 1 word per line: https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe

## Installation

Add this plugin to your project:

```bash
# Install via npm
npm install --save-dev tailwindcss-visuallyhidden
```

## Usage

You can add the plugin to your tailwind config as follows:

```js
require('tailwindcss-visuallyhidden')()
```

This plugin outputs the following

```css
.visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap; /* 1 */
}

.visuallyhidden.focusable:active,
.visuallyhidden.focusable:focus {
    clip: auto;
    clip-path: none;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    width: auto;
    white-space: inherit;
}
```

As per the [tailwind plugin docs](https://tailwindcss.com/docs/plugins/) you are able to pass variants (repsonsive, hover etc) as a parameter.

```js
require('tailwindcss-visuallyhidden')({
  variants: ['responsive', 'hover'],
})
```
