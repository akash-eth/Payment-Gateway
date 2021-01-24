
// console.log(__filename);
// console.log(__dirname);
const EventEmitter = require('events');
// const emitter = new EventEmitter; // we no longer need it


var url = "http://logger.io.com";

class Logger extends EventEmitter{

    log (message) {
    
        //Sending http request
        console.log(message);
        
        // Raise an event
        this.emit("messageLogged", {uid: 123, url: "http://google.com"})
    }
}




module.exports = Logger;

