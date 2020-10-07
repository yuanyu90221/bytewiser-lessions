const dot = ".".charCodeAt(0);
const rep = "!".charCodeAt(0);
process.stdin.on('data', function(buffer) {
  for (let i = 0 ; i < buffer.length; i++) {
    if (buffer[i] === dot ) buffer[i] = rep;
  }
  console.log(buffer);
});
