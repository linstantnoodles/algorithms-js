process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  var elements = chunk.split('\n');
  if (elements.length < 1) {
    return;
  }

  var numObjects = elements[0];
  console.log('Number of objects: ' + numObjects);
  for (var i = 1; i < elements.length; i++) {
    if (elements[i]) {
      console.log(elements[i].split(' '));
    }
  }

});
