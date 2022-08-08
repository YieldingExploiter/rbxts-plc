import rc4 from "../plc/rc4";

if(rc4('abc','123') !== 'ü¯ê') throw new Error('rc4 hardcode fail 1')
if(rc4('abc','ü¯ê') !== '123') throw new Error('rc4 hardcode fail 2')

console.log('test_rc4.hardcode: ok');

const rndStr = (length:number) => {
  const inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let outString: string = '';
  for (let i = 0; i < length; i++) {
    outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
  }
  return outString;
}

for (let idx = 0; idx < 512; idx++) {
  const key = rndStr(512);
  const input = rndStr(idx+1);
  const encr = rc4(key, input);
  const output = rc4(key, encr);
  if (output !== input)throw new Error(`rc4 random fail 1
rc4(${key},${input})=${output}`)
}
for (let idx = 1; idx < 512; idx++) {
  const key = rndStr(512);
  const input = rndStr((idx*idx)+1);
  const encr = rc4(key, input);
  const output = rc4(key, encr);
  if (output !== input)throw new Error(`rc4 random fail 2
rc4(${key},${input})=${output}`)
}

console.log('test_rc4.random: ok');
