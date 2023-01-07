# Colby


[![npm version][npm-version-src]][npm-version-href]
[![npm href][standard-js-src]][standard-js-href]

<!-- Refs -->
[standard-js-src]: https://img.shields.io/badge/license-MIT-brightgreen?&style=flat-square
[standard-js-href]: https://github.com/Generalsimus/colby/blob/master/LICENSE

[npm-version-src]: https://img.shields.io/npm/v/colby?&style=flat-square
[npm-version-href]: https://www.npmjs.com/package/colby


### RGB Color
```js
const { toRgb } = require("colby");

console.log(toRgb(200, 1, 1)("This text is rgb(200, 1, 1) red!"));


const blueColor = toRgb(0, 0, 255);

console.log(blueColor("This text is rgb(0, 0, 255) blue!"));
```

### Default Colors
```js
const { colors } = require("colby");

console.log(colors.Red("This text is red"));
console.log(colors.Green("This text is green"));
console.log(colors.Cyan("This text is cyan"));
console.log(colors.Yellow("This text is yellow"));

// text Background-color
console.log(colors.Red("Background of this text is red", true));
console.log(colors.Green("Background of this text is green", true));
console.log(colors.Cyan("Background of this text is cyan", true));
console.log(colors.Yellow("Background of this text is yellow", true));
```

### Style
```js
const { style } = require("colby");

console.log(style.Underlined("text with underline"));
console.log(style.Dim("Text with dim"));
console.log(style.Italic("Text with italic"));
console.log(style.Reverse("Text with reverse"));
console.log(style.StrikeThrough("Text with strike through"));

```



## License

MIT

 
