var http = require('http');

var url1 = 'http://omdbapi.com/?i=tt0241527';
var url2 = 'http://omdbapi.com/?i=tt0295297';

var responses = [];

http.request(url1, function(res) {
  res.setEncoding('utf8');
  var str;
  res.on('data', function (data) {
    str = JSON.parse(data);

  });

  res.on('end', function() {
    responses.push(str);
    http.request(url2, function(res) {
      res.setEncoding('utf8');
      var str;
      res.on('data', function (data) {
        str = JSON.parse(data);

      });

      res.on('end', function() {
        responses.push(str);
        console.log(responses);
      });
    }).end();
  });
}).end();