let https = require('https');
let options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
}

let getAndPrintHTML = function(options) {
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
      console.log('Finished collecting data!', printedData);
    })
  })
}

getAndPrintHTML(options);