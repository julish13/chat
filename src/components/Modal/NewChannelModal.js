import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { modalActions } from '@store/redux/modal.js';
import WebSocketContext from '@store/context/web-socket-context';

const NewChannelModal = () => {
  const { t } = useTranslation();
  const webSocketContext = useContext(WebSocketContext);
  const dispatch = useDispatch();

  const onHide = () => {
    dispatch(modalActions.hideModal());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    webSocketContext.addChannel({ name: 'ggg' });
    onHide();
  };

  return (
    <Modal show onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.newChannel.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body />
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          {t('modals.newChannel.cancel')}
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          {t('modals.newChannel.submit')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewChannelModal;
