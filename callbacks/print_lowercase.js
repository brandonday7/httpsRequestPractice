let funcs = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
}

function printLowercase(html) {
  console.log(html.toLowerCase());
}

funcs.getHTML(requestOptions, printLowercase);