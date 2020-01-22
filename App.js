// function sayHello (name) {
//     console.log('Hello' + ' ' + name);
// }
//setTimeout() call function in delay
//clearTimeout();
//setInterval(); repetdly call function after delay
//clearInterval(); stop the repetadly calling
//before use with global
//sayHello('ishay');
//console.log(module);
// const logger = require('./logger');

// logger ('message');

const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory  = os.freemem();

const fs = require('fs');
//const files = fs.readdirSync('./');

const files = fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files)
});
//we use first letter in cap to defy as a class
const EventEmitter = require('events');
//now we build object

// emitter.emit('messageLogged', {id: 1, url: 'http://'});
//emit making a noise or produce somting -signal event happen
const Logger = require('./logger.js');
//after build clas we build object call logger small letter l
const logger = new Logger();


logger.on('messageLogged',(arg) => { //e or eventarg can use => after arg instead of function
    console.log('Loistener called', arg);
});

logger.log('message');

 const http = require('http');
 /* old way to connect to server
 const server = http.createServer();
 server.on('connection', (socket) => {
     console.log('new connection')

 })
 */
const server = http.createServer((req, res) => {
    if (req.url === '/')
    {
        res.write('Hey You connect to my server');
        res.end();
    }
    //if we want to go url contain this down...
    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
})
server.listen(3000);

console.log('Listening on port 3000...');


console.log(files);
console.log(totalMemory + ' ' + freeMemory);
console.log(`Total Memory: ${totalMemory}`);
