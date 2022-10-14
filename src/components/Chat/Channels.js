import React from 'react';
import { Col } from 'react-bootstrap';
import ChannelsHeading from './ChannelsHeading';
import ChannelsList from './ChannelsList';

const Channels = () => {
  return (
    <Col className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
      <ChannelsHeading />
      <ChannelsList />
    </Col>
  );
};

export default Channels;
