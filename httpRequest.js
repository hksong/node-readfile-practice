var http = require('http');

var url1 = 'http://omdbapi.com/?i=tt0241527';
var url2 = 'http://omdbapi.com/?i=tt0295297';
var responses = [];

storeInResponses = function(res, req, toLog) {
  res.on('data', function (data) {
    responses.push(data.toString());
  });

  res.on('end', function() {
    if (toLog) console.log(responses);
  });
};

http.get(url1, storeInResponses);
http.get(url2, function(res, req) {
  storeInResponses(res, req, true);
});