import { useContext, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import AuthContext from '@store/context/auth-context.js';
import { fetchChatData } from '@store/slices/chat-actions.js';
import Channels from '@components/Chat/Channels';
import ChannelsHeading from '@components/Chat/ChannelsHeading';
import ChannelsList from '@components/Chat/ChannelsList';
import ActiveChannel from '@components/Chat/ActiveChannel';
import ActiveChannelHeading from '@components/Chat/ActiveChannelHeading';
import MessagesBox from '@components/Chat/MessagesBox';
import MessageForm from '@components/Chat/MessageForm';

const Chat = () => {
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [activeChannelMessages, setActiveChannelMessages] = useState(null);
  const { channels, currentChannelId, messages } = useSelector((state) => state.chat);
  const { name: currentChannelName } = useMemo(
    () => channels.length > 0 && channels.find(({ id }) => currentChannelId === id),
    [channels.length, currentChannelId]
  );

  useEffect(() => {
    dispatch(fetchChatData(token));
  }, [dispatch]);

  useEffect(() => {
    setActiveChannelMessages(messages.filter(({ channelId }) => channelId === currentChannelId));
  }, [currentChannelId, messages]);

  useEffect(() => {
    if (channels.length > 0 && activeChannelMessages !== null) {
      setIsLoading(false);
    }
  }, [channels]);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Channels>
              <ChannelsHeading />
              <ChannelsList channels={channels} currentChannelId={currentChannelId} />
            </Channels>
            <ActiveChannel>
              <ActiveChannelHeading name={currentChannelName} count={messages.length} />
              <MessagesBox messages={activeChannelMessages} />
              <MessageForm />
            </ActiveChannel>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Chat;
