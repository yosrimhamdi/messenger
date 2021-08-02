const io = require('socket.io')(3001, { cors: { origin: '*' } });

io.on('connection', socket => {
  socket.on('message', (message, room) => {
    if (!room) {
      socket.broadcast.emit('message', message);
    } else {
      socket.to(room).emit('message', message);
    }
  });

  socket.on('join-room', room => {
    socket.join(room);
  });
});
