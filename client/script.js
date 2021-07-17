import { io } from 'socket.io-client';

const socket = io('ws://localhost:3000');

const sendButton = document.querySelector('.send-button');
const messageInput = document.querySelector('.message');
const messageList = document.querySelector('.messages');

sendButton.addEventListener('click', () => {
  socket.emit('message', messageInput.value);
});

socket.on('message', (userId, message) => {
  const m = `<li>${userId.substring(0, 2)} said ${message}</li>`;

  messageList.insertAdjacentHTML('beforeend', m);
});
