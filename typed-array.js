process.stdin.once('data', function(buffer) {
  if (buffer !== null) {
   let result = new Uint8Array(buffer);
   console.log(JSON.stringify(result));   
  }
});
