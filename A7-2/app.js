const fs = require('fs');
const TestApplication = require('./logger.js');

let testapplication = new TestApplication();
testapplication.on('loadApplication', () => {
    let data = 'Application loaded!\n';
    fs.appendFile('logger.txt', data, (err) => {
        if (err) {
            throw err;
        }
        else {
            console.log('Finished!');
        }
    });
});

testapplication.loadApplication('Application is loading...');