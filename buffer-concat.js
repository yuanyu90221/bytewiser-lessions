const buffers = [];
//const { Writable } = require('stream');
//class MyWritable extends Writable {
// _write(chunk, encoding, callback) {
//  callback();
// }
//};
//const stream = new MyWritable();
//process.stdin.pipe(stream);
//stream.once('drain', function(chunk) {
//  if (chunk !== null) {
//    buffers.push(chunk);
//  }
//});
//stream.on('end', function() {
//  console.log('end');
//  process.stdout.write(Buffer.concat(buffers));
//});
process.stdin.on('readable', function(){
  let chunk = process.stdin.read();
  if (chunk !== null) {
    buffers.push(chunk);
  }
});
process.stdin.on('end', function(){
  console.log(Buffer.concat(buffers));
});
