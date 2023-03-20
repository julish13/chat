import React, { useCallback, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import WebSocketContext from '@store/context/web-socket-context';
import ChannelNamingForm from './ChannelNamingForm.js';

const NewChannelModal = () => {
  const { t } = useTranslation();
  const webSocketContext = useContext(WebSocketContext);
  const onSubmit = useCallback(
    (values) => {
      webSocketContext.addChannel(values);
    },
    [webSocketContext]
  );

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.channelNaming.newChannelTitle')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ChannelNamingForm onSubmit={onSubmit} />
      </Modal.Body>
    </>
  );
};

export default NewChannelModal;
