// (function (exports, require, module, __filename, __dirname) {

 console.log(__filename);
 console.log(__dirname);
var url = 'http://mylogger.io/log';
const EventEmitter = require('events');

//now we build object
class Logger extends EventEmitter {
    //when function in class we call it method dont need to use function
    log (message) { 
    //send an HTTP request
        console.log(message);
        this.emit('messageLogged', {id: 1, url: 'http://'});
    //emit making a noise or produce somting -signal event happen
} 
}


module.exports = Logger;
// })
