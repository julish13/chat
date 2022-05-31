import { useMemo } from 'react';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CurrentChannelHeading from './CurrentChannelHeading';
import MessagesBox from './MessagesBox';
import MessageForm from './MessageForm';

const CurrentChannel = () => {
  const { channels, currentChannelId, messages, isLoaded } = useSelector((state) => state.chat);

  const currentChannelName = useMemo(
    () => isLoaded && channels.find(({ id }) => currentChannelId === id).name,
    [isLoaded, currentChannelId]
  );

  const activeChannelMessages = useMemo(
    () => isLoaded && messages.filter(({ channelId }) => channelId === currentChannelId),
    [currentChannelId, messages, isLoaded]
  );

  return (
    <Col className="p-0 h-100">
      <div className="d-flex flex-column h-100">
        <CurrentChannelHeading name={currentChannelName} count={activeChannelMessages.length} />
        <MessagesBox messages={activeChannelMessages} />
        <MessageForm currentChannelId={currentChannelId} />
      </div>
    </Col>
  );
};

export default CurrentChannel;
