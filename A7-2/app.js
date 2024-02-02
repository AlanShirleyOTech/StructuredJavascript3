const fs = require('fs');
let data = 'Hello, World!';
fs.appendFile('helloworld.txt', data, (err) => {
    if (err) {
        throw err;
    } 
    else {
        console.log('Data is written');
    }
});