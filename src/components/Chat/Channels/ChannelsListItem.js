import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav } from 'react-bootstrap';
import { chatActions } from '@store/redux/actions.js';
import { chatSelector } from '@store/redux/selectors.js';
import DefaultItem from './DefaultItem.js';
import DropdownItem from './DropdownItem.js';

const ChannelsListItem = ({ name, id, removable }) => {
  const dispatch = useDispatch();
  const changeChannelHandler = useCallback(() => {
    dispatch(chatActions.setCurrentChannel(id));
  }, []);
  const { currentChannelId } = useSelector(chatSelector);

  const isActive = currentChannelId === id;

  return (
    <Nav.Item as="li" className="w-100" key={id}>
      {removable ? (
        <DropdownItem
          isActive={isActive}
          name={name}
          id={id}
          changeChannelHandler={changeChannelHandler}
        />
      ) : (
        <DefaultItem isActive={isActive} name={name} changeChannelHandler={changeChannelHandler} />
      )}
    </Nav.Item>
  );
};

export default ChannelsListItem;
