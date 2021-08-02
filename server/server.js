const io = require('socket.io')(3000, { cors: { origin: '*' } });

io.on('connection', socket => {
  socket.on('message', (message, room) => {
    if (!room) {
      socket.broadcast.emit('message', socket.id, message);
    } else {
      socket.to(room).emit('message', socket.id, message);
    }
  });
});
