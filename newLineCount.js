var fs = require('fs');

var file = process.argv[2];

var streamSync = fs.readFileSync(file, 'utf8');
console.log('Sync: ', countNewLines(streamSync));

fs.readFile(file, 'utf8', function(err, data) {
  if (err) return console.error(err);
  console.log('Async: ', countNewLines(data));
});

function countNewLines(stream) {
  return stream.match(/\n/g).length;
}