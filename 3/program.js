var fs = require('fs');

var bufferObj = fs.readFileSync(process.argv[2]);
var countLines = bufferObj.toString().split('\n').length - 1;

console.log(countLines);