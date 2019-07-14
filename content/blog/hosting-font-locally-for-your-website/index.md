---
title: 'Using locally hosted fonts on your website'
date: 2019-07-07
info: 'Simple steps to host custom fonts locally and use them on your website'
tags: ['web', 'css']
---

![Featured image](featured-image.jpg)

Using elegant typography can enhance the look and feel of your website. So using custom fonts will be a better option instead of relying on the default fonts that varying from the different operating systems.

[Google fonts](https://fonts.google.com) is one of the best free resources to add custom fonts to your website, and the process is simple. But not all the font are available in google fonts. In this case, you want to host the fonts locally, and it takes a couple more steps to achieve it.

---

Earlier the using of custom fonts was not consistent across different browsers. But at the time of writing this article, all the major browsers support the woff font file format with 96%+ global users. So leaving out others might be okay.

Check these stats for the [support for woff format](https://caniuse.com/#feat=woff).

| File Format |              Browsers               |
| :---------: | :---------------------------------: |
|    .svg     |         Old safari browser          |
|    .eot     |          Internet Explorer          |
|    .ttf     | Everything except Internet Explorer |
|    .woff    |            Newer browser            |

## Embedding web fonts

First, you need to download web fonts and place it in your project directory. Then embed font files in the stylesheet with @font-face rule and it should on the top of the stylesheet.
@font-face rules require _font-family_ and _src_ property.

- **font-family** lets you define how the font is referred in rest of the stylesheet

- **src** lets to provide the path where the font exists locally along with the format of the file. The path can be absolute or relative to the CSS stylesheet from where you are defining the @font-face rule.

@font-face rule automatically fetches the font file format required by the browser if it is present.

```css
@font-face {
  font-family: 'Open Sans';
  src: url('OpenSans.eot') format('eot'), url('OpenSans.woff') format('woff'),
    url('OpenSans.ttf') format('truetype');
}
```

## Using web fonts

You can now use font face in the stylesheet. You have to provide the value provided in font-family property in the above step.

_Using a fallback font is a good idea if the primary font doesn't load or is not available_

```css
body {
  font-family: 'Open Sans', sans-serif;
}
```

## Multiple font faces

You can use the previous method by using multiple distinct font-family names.

```css
@font-face {
  font-family: 'Open Sans Regular';
  src: url('OpenSans-Regular.woff') format('woff');
}

@font-face {
  font-family: 'Open Sans Bold';
  src: url('OpenSans-Bold.woff') format('woff');
}

@font-face {
  font-family: 'Open Sans Bold Italics';
  src: url('OpenSans-Bold-Italics.woff') format('woff');
}
```

This approach is not ideal and gets messy very quickly when having multiple styles of the same font family. Instead, using attributes like font-weight and font-style will help solve this problem.

**The correct way to do it**

```css
@font-face {
  font-family: 'Open Sans';
  src: url('OpenSans-Regular.woff') format('woff');
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: 'Open Sans';
  src: url('OpenSans-Bold.woff') format('woff');
  font-style: normal;
  font-weight: 700;
}

@font-face {
  font-family: 'Open Sans';
  src: url('OpenSans-Bold-Italics.woff') format('woff');
  font-style: italic;
  font-weight: 400;
}

/* And use them like this */
h1 {
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
}

p {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}

.quote {
  font-family: 'Open Sans', sans-serif;
  font-style: italic;
}
```

## Bonus

Using the "font-display" descriptor is a great way to optimize page load.
I recommend using _font-display: swap_, but you should read more about [font-display](https://font-display.glitch.me/).
