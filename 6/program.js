var mymodule = require('./mymodule.js');
var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, (err, list) => {
    if(err) {
        console.log(err);
    } else {
        list.forEach((file) => {
            console.log(file);      
        });
    }
});
