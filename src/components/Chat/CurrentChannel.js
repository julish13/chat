import React, { useMemo } from 'react';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CurrentChannelHeading from './CurrentChannelHeading';
import MessagesBox from './MessagesBox';
import MessageForm from './MessageForm';

const CurrentChannel = () => {
  const { channels, currentChannelId, messages } = useSelector((state) => state.chat);

  if (channels.length === 0) {
    return null;
  }

  const currentChannelName = useMemo(
    () => channels.find(({ id }) => currentChannelId === id).name,
    [currentChannelId]
  );

  const activeChannelMessages = useMemo(
    () => messages.filter(({ channelId }) => channelId === currentChannelId),
    [currentChannelId, messages]
  );

  return (
    <Col className="p-0 h-100">
      <div className="d-flex flex-column h-100">
        <CurrentChannelHeading name={currentChannelName} count={activeChannelMessages.length} />
        <MessagesBox messages={activeChannelMessages} />
        <MessageForm channelId={currentChannelId} />
      </div>
    </Col>
  );
};

export default CurrentChannel;
