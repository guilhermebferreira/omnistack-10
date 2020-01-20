const socketio = require('socket.io');

exports.setupWebsocket = (server) =>{
    console.log('socket iniciado');
    const io = socketio(server);

    io.on('connection', socket => {
        console.log(socket.id);
    })
}