const EventEmitter = require('events');

module.exports = 
class TestApplication extends EventEmitter {
    loadApplication(message) {
        console.log(message);
        this.emit('loadApplication');
    }
}