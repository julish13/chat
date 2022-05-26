import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import AuthContext from '@store/context/auth-context.js';
import { fetchChatData } from '@store/slices/chat-actions.js';
import Channels from '@components/Chat/Channels.js';

const Chat = () => {
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChatData(token));
  }, [dispatch]);

  return (
    <Container className='h-100 my-4 overflow-hidden rounded shadow'>
      <Row className='h-100 bg-white flex-md-row'>
        <Channels />
      </Row>
    </Container>
  );
};

export default Chat;
