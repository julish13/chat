import React from 'react';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { chatSelector } from '@store/redux/selectors.js';
import ChannelsListItem from './ChannelsListItem.js';

const ChannelsList = () => {
  const { channels } = useSelector(chatSelector);

  return (
    <Nav as="ul" variant="pills" fill className="flex-column px-2 mb-3 overflow-auto h-100 d-block">
      {channels.map(({ id, name, removable }) => (
        <ChannelsListItem name={name} id={id} removable={removable} key={id} />
      ))}
    </Nav>
  );
};

export default ChannelsList;
