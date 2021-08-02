import React, { useState } from 'react';
import { io } from 'socket.io-client';

import Chat from './Chat';
import SendMessage from './SendMessage';
import JoinRoom from './JoinRoom';

const App = () => {
  const [room, setRoom] = useState('');

  const socket = io('http://localhost:3001');

  return (
    <div>
      <Chat socket={socket} />
      <SendMessage socket={socket} room={room} />
      <JoinRoom socket={socket} setRoom={setRoom} />
    </div>
  );
};
export default App;
