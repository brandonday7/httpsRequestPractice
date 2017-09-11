let https = require('https');

let getAndPrintHTMLChunks = function() {
  let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      console.log(data+'/n/');
    })

    response.on('end', function() {
      console.log('Finished collecting data');
    })
  })
}

getAndPrintHTMLChunks();