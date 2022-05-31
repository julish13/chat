import { useContext, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import AuthContext from '@store/context/auth-context.js';
import { fetchChatData } from '@store/slices/chat-actions.js';
import {
  Channels,
  ChannelsHeading,
  ChannelsList,
  ActiveChannel,
  ActiveChannelHeading,
  MessagesBox,
  MessageForm,
} from '@components';

const Chat = () => {
  const dispatch = useDispatch();
  const { token } = useContext(AuthContext);
  const { channels, currentChannelId, messages, isLoaded } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(fetchChatData(token));
  }, [dispatch]);

  const currentChannelName = useMemo(
    () => isLoaded && channels.find(({ id }) => currentChannelId === id).name,
    [isLoaded, currentChannelId]
  );

  const activeChannelMessages = useMemo(
    () => isLoaded && messages.filter(({ channelId }) => channelId === currentChannelId),
    [currentChannelId, messages, isLoaded]
  );

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        {!isLoaded ? (
          <p>Loading...</p>
        ) : (
          <>
            <Channels>
              <ChannelsHeading />
              <ChannelsList channels={channels} currentChannelId={currentChannelId} />
            </Channels>
            <ActiveChannel>
              <ActiveChannelHeading
                name={currentChannelName}
                count={activeChannelMessages.length}
              />
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
