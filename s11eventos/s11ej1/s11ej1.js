const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();

const listener1 = function listener1() {
    console.log('listener1 ejecutado');
}

const listener2 = function listener2() {
    console.log('listener2 ejecutado');
}

eventEmitter.addListener('conexion', listener1);
eventEmitter.on('conexion', listener2);

const eventListeners = eventEmitter.listenerCount('conexion');
//var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'conexion');

console.log(eventListeners + ' cuantas veces se llama al evento');

eventEmitter.emit('conexion');