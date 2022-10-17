import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import AuthContext from '@store/context/auth-context.js';
import { fetchChatData } from '@store/redux/chat.js';
import { Channels, CurrentChannel } from '@components';
import PrivateRoute from '@utils/PrivateRoute.js';
import { WebSocketContextProvider } from '@store/context/web-socket-context';

const ChatInner = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.chat);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    dispatch(fetchChatData(token));
  }, [dispatch]);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Channels />
            <CurrentChannel />
          </>
        )}
      </Row>
    </Container>
  );
};

const Chat = () => (
  <PrivateRoute>
    <WebSocketContextProvider>
      <ChatInner />
    </WebSocketContextProvider>
  </PrivateRoute>
);

export default Chat;
