import React from 'react';
import { useRef } from 'react';

const SendMessage = ({ socket, room }) => {
  const ref = useRef(null);

  const onButtonClick = () => {
    socket.emit('message', ref.current.value, room);
  };

  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={onButtonClick}>send</button>
    </div>
  );
};

export default SendMessage;
