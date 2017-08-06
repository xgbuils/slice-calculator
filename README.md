# slice-calculator

[![travis ci][1]][2]
[![npm version][3]][4]
[![Coverage Status][5]][6]
[![Dependency Status][7]][8]

`slice-calculator` exports a function that given the limits `start` and `end` of a list, it calculates the new limits of the list.

This library is useful for optimize multiple slice chaining without calculating intermediate lists.

## Install

``` bash
$ npm install slice-calculator --save
```

## Usage
``` JavaScript
const sliceCalculator = require('slice-calculator')

sliceCalculator({start: 0, end: 6}, 2, 8) // {start: 2, end: 6}
sliceCalculator({start: 0, end: 6}, -1, 4) // {start: 0, end: 4}
sliceCalculator({start: 0, end: 6}, 1, 5) // {start: 1, end: 5}
sliceCalculator({start: 1, end: 5}, 1, 3) // {start: 2, end: 4}
sliceCalculator({start: 2, end: 4}, 0, 1) // {start: 2, end: 3}
```

## Support
- Node.js >=6
- ES2015 transpilers

## License
MIT

  [1]: https://travis-ci.org/xgbuils/slice-calculator.svg?branch=master
  [2]: https://travis-ci.org/xgbuils/slice-calculator
  [3]: https://badge.fury.io/js/slice-calculator.svg
  [4]: https://badge.fury.io/js/slice-calculator
  [5]: https://coveralls.io/repos/github/xgbuils/slice-calculator/badge.svg?branch=master
  [6]: https://coveralls.io/github/xgbuils/slice-calculator?branch=master
  [7]: https://david-dm.org/xgbuils/slice-calculator.svg
  [8]: https://david-dm.org/xgbuils/slice-calculator
  