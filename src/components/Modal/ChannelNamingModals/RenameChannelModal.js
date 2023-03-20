import React, { useCallback, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { modalSelector } from '@store/redux/selectors.js';
import WebSocketContext from '@store/context/web-socket-context';
import ChannelNamingForm from './ChannelNamingForm.js';

const RenameChannelModal = () => {
  const { t } = useTranslation();
  const webSocketContext = useContext(WebSocketContext);
  const {
    payload: { id },
  } = useSelector(modalSelector);
  const onSubmit = useCallback(
    ({ name }) => {
      webSocketContext.renameChannel({ id, name });
    },
    [webSocketContext]
  );

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.channelNaming.renameChannelTitle')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ChannelNamingForm onSubmit={onSubmit} />
      </Modal.Body>
    </>
  );
};

export default RenameChannelModal;
