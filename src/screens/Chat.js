import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import AuthContext from '@store/context/auth-context.js';
import { fetchChatData } from '@store/slices/chat-actions.js';
import Channels from '@components/Chat/Channels';
import ChannelsHeading from '@components/Chat/ChannelsHeading';
import ChannelsList from '@components/Chat/ChannelsList';

const Chat = () => {
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { channels, currentChannelId } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(fetchChatData(token));
  }, [dispatch]);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <Channels>
          <ChannelsHeading />
          <ChannelsList channels={channels} currentChannelId={currentChannelId} />
        </Channels>
      </Row>
    </Container>
  );
};

export default Chat;
