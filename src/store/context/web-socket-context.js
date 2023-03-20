import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { chatActions } from '../redux/actions.js';

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

    socket.on('newChannel', (channel) => {
      dispatch(chatActions.addChannel(channel));
    });

    socket.on('removeChannel', ({ id }) => {
      dispatch(chatActions.removeChannel(id));
    });

    socket.on('renameChannel', (channel) => {
      dispatch(chatActions.renameChannel(channel));
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

  const addChannel = useCallback(
    (channel) => {
      socket.timeout(5000).emit('newChannel', channel, (err) => {
        if (err) {
          setHasError(true);
          console.error(err.message);
        }
      });
    },
    [socket]
  );

  const removeChannel = useCallback(
    (id) => {
      socket.timeout(5000).emit('removeChannel', { id }, (err) => {
        if (err) {
          setHasError(true);
          console.error(err.message);
        }
      });
    },
    [socket]
  );

  const renameChannel = useCallback(
    (channel) => {
      socket.timeout(5000).emit('renameChannel', channel, (err) => {
        if (err) {
          setHasError(true);
          console.error(err.message);
        }
      });
    },
    [socket]
  );

  const contextValue = useMemo(
    () => ({
      socket,
      sendMessage,
      hasError,
      addChannel,
      removeChannel,
      renameChannel,
    }),
    [socket, sendMessage, hasError, addChannel]
  );

  return <WebSocketContext.Provider value={contextValue}>{children}</WebSocketContext.Provider>;
};

export { WebSocketContextProvider };
export default WebSocketContext;
