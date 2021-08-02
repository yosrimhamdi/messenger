import React from 'react';
import { useRef } from 'react';

const JoinRoom = ({ socket, setRoom }) => {
  const ref = useRef(null);

  const onButtonClick = () => {
    socket.emit('join-room', ref.current.value);

    setRoom(ref.current.value);

    ref.current.value = '';
  };

  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={onButtonClick}>join</button>
    </div>
  );
};

export default JoinRoom;
