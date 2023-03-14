import React from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import NewChannelForm from './NewChannelForm';

const NewChannelModal = () => {
  const { t } = useTranslation();

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.newChannel.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NewChannelForm />
      </Modal.Body>
    </>
  );
};

export default NewChannelModal;
