import { io } from 'socket.io-client';

const socket = io('ws://localhost:3000');

const sendButton = document.querySelector('.send-button');
const messageInput = document.querySelector('.message');
const messageList = document.querySelector('.messages');

socket.on('connect', () => {
  document.body.insertAdjacentHTML('beforebegin', `YOU ARE: ${socket.id}`);
});

sendButton.addEventListener('click', () => {
  const room = document.querySelector('.room').value;

  socket.emit('message', messageInput.value, room);
});

socket.on('message', (userId, message) => {
  const m = `<li>${userId.substring(0, 2)} said ${message}</li>`;

  messageList.insertAdjacentHTML('beforeend', m);
});
