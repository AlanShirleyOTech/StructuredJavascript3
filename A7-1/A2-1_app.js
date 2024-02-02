const EventEmitter = require('events');
const Logger = require('./A2-1_logger');

var logger = new Logger();

logger.on('firstCatch', () => {
    console.log('First Listener Called!\n');
});

logger.on('secondCatch', () => {
    console.log('Second Listener Called!\n');
});

logger.on('thirdCatch', () => {
    console.log('Third Listener Called!\n');
});

logger.firstCatch('Calling First Listener...');
logger.secondCatch('Calling Second Listener...');
logger.thirdCatch('Calling Third Listener...');