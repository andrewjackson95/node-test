console.log('hello-world');

//var lodish = require('lodash');
//lodish.get({}, '');

var otherStuff = require('./my-fancy-module.js');
console.log(otherStuff.hello);
console.log(otherStuff.myFunction());

var burgerTest = require('./node_modules/webpack.config.js');
console.log(burgerTest);
