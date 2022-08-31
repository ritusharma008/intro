// in es5 we use require to import the library

const lib = require('./library.js');
const lodash = require('lodash');

console.log(lib.add(5,10));

console.log(lodash.upperCase("ritu sharma"));
console.log(lodash.add(4564,2637));

// webpack is a bunder that pack all the bundles in one.

