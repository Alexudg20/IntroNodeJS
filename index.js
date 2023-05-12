var express = require('express');

var app = express();

var server = app.listen(4000, function() {
    console.log('Server listening on port 4000');
});

app.use(express.static('public'));

var io = socket(server);
io.on('connection', (socket)=> {

    console.log('Connected', socket.id);

    socket.on('chat', function(data){
        io.sockets.emit ('chat', data);
    });

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});