//The Buffer class is a global, making it very rare that one would need to ever require('buffer'). 
//A Buffer cannot be resized. 
//A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.



var buf = new Buffer(256);
len = buf.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + " bytes: " + buf.toString('utf8', 0, len));



var buf = new Buffer('test', 'utf8');
console.log(buf.toString());

var json = JSON.stringify(buf);

console.log(json);
// '[116,101,115,116]'

var copy = new Buffer(JSON.parse(json));

console.log(copy);
// <Buffer 74 65 73 74>

