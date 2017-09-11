let https = require('https');
let options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
}

function getHTML(options, callback) {
  let requestOptions = {
    host: options.host,
    path: options.path
  };

  let printedData = '';

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');


    response.on('data', function(data) {
      printedData += data;
    })

    response.on('end', function() {
      callback(printedData);
    })
  })
}


function printHTML (html) {
  console.log(html);
}

getHTML(options, printHTML);


