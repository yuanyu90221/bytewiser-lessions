const data = Number(process.argv[2]);
const u32Arr = new Uint32Array(1);
u32Arr[0] = data;
const u16Arr = new Uint16Array(u32Arr.buffer);
//const u32Arr = new Uint32Array([data]);
//const u8Arr = new Uint8Array(u32Arr.buffer); 
//const u16Arr = new Uint16Array(u8Arr.buffer);
console.log(JSON.stringify(u16Arr));
