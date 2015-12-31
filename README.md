# ultra-glob

Wrapper around glob for ease of use, negative patterns, array of globs and
Promises.

## usage

```JavaScript
const glob = require('ultra-glob');

glob([
  './**/*.js',
  '!./node_modules/*',
]).then(function (files) {
  // files is an array of filenames.
})
```
