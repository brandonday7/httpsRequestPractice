let https = require('https');

let getAndPrintHTML = function() {
  let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
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

getAndPrintHTML();