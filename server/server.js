const io = require('socket.io')(3000, {
  cors: {
    origin: '*',
  },
});

io.on('connection', socket => {
  socket.on('message', message => {
    io.emit('message', socket.id, message);
  });
});
