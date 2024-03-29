import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import { modalActions } from '@store/redux/actions.js';
import DefaultItem from './DefaultItem.js';

const LOCALE_PATH = 'chat.channels.dropdown.';

const DropdownItem = ({ isActive, name, id, changeChannelHandler }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const removeItem = useCallback(() => {
    dispatch(modalActions.showModal({ type: 'removeChannel', payload: { id } }));
  }, []);

  const renameItem = useCallback(() => {
    dispatch(modalActions.showModal({ type: 'renameChannel', payload: { id } }));
  }, []);

  const dropdownActions = {
    remove: removeItem,
    rename: renameItem,
  };

  return (
    <Dropdown as={ButtonGroup} className="d-flex btn-group">
      <DefaultItem name={name} isActive={isActive} changeChannelHandler={changeChannelHandler} />
      <Dropdown.Toggle
        id="dropdown-basic"
        className="flex-grow-0 dropdown-toggle-split"
        variant={isActive ? 'secondary' : null}
      >
        <span className="visually-hidden">{t(`${LOCALE_PATH}title`)}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {Object.entries(dropdownActions).map(([name, action]) => (
          <Dropdown.Item as={Button} onClick={action} key={name}>
            {t(`${LOCALE_PATH}actions.${name}`)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownItem;
