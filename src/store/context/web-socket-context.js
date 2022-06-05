import { createContext, useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { chatActions } from '../slices/chat-slice.js';

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

  const sendMessage = (message, setIsSubmitting) => {
    setIsSubmitting(true);
    socket.timeout(5000).emit('newMessage', message, (err) => {
      if (err) {
        setHasError(true);
        console.error(err.message);
      }
      setIsSubmitting(false);
    });
  };

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
