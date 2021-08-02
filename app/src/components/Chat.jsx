import React, { useRef } from 'react';

const Chat = ({ socket }) => {
  const ref = useRef(null);

  socket.on('message', message => {
    ref.current.insertAdjacentHTML('afterbegin', `<li>${message}</li>`);
  });

  return <ul ref={ref}></ul>;
};

export default Chat;
