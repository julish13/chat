import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import AuthContext from '@store/context/auth-context.js';
import { fetchChatData } from '@store/slices/chat-actions.js';
import { Channels, CurrentChannel } from '@components';

const Chat = () => {
  const dispatch = useDispatch();
  const { isLoaded } = useSelector((state) => state.chat);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    dispatch(fetchChatData(token));
  }, [dispatch]);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        {!isLoaded ? (
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

export default Chat;
