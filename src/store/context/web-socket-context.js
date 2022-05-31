import { createContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { chatActions } from '../slices/chat-slice.js';

const WebSocketContext = createContext({
  socket: null,
  sendMessage: () => {},
  hasError: false,
  isSubmitting: false,
});

const WebSocketContextProvider = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  let socket;
  let contextValue;

  const dispatch = useDispatch();

  const sendMessage = (message) => {
    setIsSubmitting(true);
    socket.timeout(5000).emit('newMessage', message, (err) => {
      if (err) {
        setHasError(true);
        console.error(err.message);
      }
      setIsSubmitting(false);
    });
  };

  if (!socket) {
    socket = io();

    socket.on('newMessage', (message) => {
      dispatch(chatActions.addMessage(message));
    });

    contextValue = {
      socket,
      sendMessage,
      hasError,
      isSubmitting,
    };
  }

  return <WebSocketContext.Provider value={contextValue}>{children}</WebSocketContext.Provider>;
};

export { WebSocketContextProvider };
export default WebSocketContext;
