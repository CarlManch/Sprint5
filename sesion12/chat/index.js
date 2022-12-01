const path = require('path');
const express = require('express');
const app = express();

const socket = require('socket.io');
//configuraciones
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

//escucha del servidor
const server = app.listen(app.get('port'),() =>{
    console.log('Servidor listening on port', app.get('port'));
});

const io = socket(server);
io.on('connection',(socket) => {
    console.log('socket conectado:', socket.id);

    socket.on('chat:message',function(data){
        io.sockets.emit('chat:message',data);    
    });
    
    socket.on('chat:typing',function(data){
        io.sockets.emit('chat:typing',data);    
    });
});