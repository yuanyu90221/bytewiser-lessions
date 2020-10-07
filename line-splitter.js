const fs = require('fs');
const filePath = process.argv[2];
fs.readFile(filePath, function(err, data) {
  if (err) {
    return data.resume();
  } else {
    let offset =  0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === '\n'.charCodeAt(0)) {
         console.log(data.slice(offset, i));
         i++;
         offset = i;
      }
    }
    console.log(data.slice(offset, data.length));
  }
});
