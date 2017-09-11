var getHTML = require('./step4/getHTML.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
}

function printHTML (html) {
  console.log(html);
}

module.exports = {
  getHTML: getHTML
}

// getHTML(requestOptions, printHTML);