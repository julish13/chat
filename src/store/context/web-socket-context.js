import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { chatActions } from '../redux/chat.js';

const WebSocketContext = createContext({
  socket: null,
  sendMessage: () => {},
  hasError: false,
});

const WebSocketContextProvider = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [socket] = useState(io());

  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('newMessage', (message) => {
      dispatch(chatActions.addMessage(message));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = useCallback(
    (message, setIsSubmitting) => {
      setIsSubmitting(true);
      socket.timeout(5000).emit('newMessage', message, (err) => {
        if (err) {
          setHasError(true);
          console.error(err.message);
        }
        setIsSubmitting(false);
      });
    },
    [socket]
  );

  const contextValue = useMemo(
    () => ({
      socket,
      sendMessage,
      hasError,
    }),
    [socket, sendMessage, hasError]
  );

  return <WebSocketContext.Provider value={contextValue}>{children}</WebSocketContext.Provider>;
};

export { WebSocketContextProvider };
export default WebSocketContext;
