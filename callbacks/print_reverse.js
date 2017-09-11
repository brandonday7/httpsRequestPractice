let funcs = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
}

function printReverse(html) {
  console.log(html.split('').reverse().join(''));
}

funcs.getHTML(requestOptions, printReverse);