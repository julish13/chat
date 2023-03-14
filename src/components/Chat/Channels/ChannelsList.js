import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Nav } from 'react-bootstrap';
import { chatActions } from '@store/redux/chat';

const ChannelsList = () => {
  const { channels, currentChannelId } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const changeChannelHandler = useCallback((id) => {
    dispatch(chatActions.setCurrentChannel(id));
  }, []);

  return (
    <Nav as="ul" variant="pills" fill className="flex-column px-2">
      {channels.map(({ id, name }) => (
        <Nav.Item as="li" className="w-100" key={id}>
          <Button
            variant={id === currentChannelId ? 'secondary' : null}
            className="w-100 rounded-0 text-start"
            onClick={() => changeChannelHandler(id)}
            type="button"
          >
            <span className="me-1">#</span>
            {name}
          </Button>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default ChannelsList;
