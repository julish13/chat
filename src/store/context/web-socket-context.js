import { createContext, useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { chatActions } from '../slices/chat-slice.js';

const WebSocketContext = createContext({
  socket: null,
  sendMessage: () => {},
  hasError: false,
});

const WebSocketContextProvider = ({ children, socket }) => {
  const [hasError, setHasError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('newMessage', (message) => {
      dispatch(chatActions.addMessage(message));
    });
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
