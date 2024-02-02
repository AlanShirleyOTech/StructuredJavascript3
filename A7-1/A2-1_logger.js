const EventEmitter = require('events');
module.exports = 
class Logger extends EventEmitter 
{
    firstCatch(message) {
        console.log(message);
        this.emit('firstCatch');
    }

    secondCatch(message) {
        console.log(message);
        this.emit('secondCatch');
    }

    thirdCatch(message) {
        console.log(message);
        this.emit('thirdCatch');
    }
};