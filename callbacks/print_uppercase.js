let funcs = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
}

function printUppercase(html) {
  console.log(html.toUpperCase());
}

funcs.getHTML(requestOptions, printUppercase);