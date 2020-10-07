const inputs =  process.argv.slice(2).map(Number);
console.log(Buffer.from(inputs).toString('hex'));
