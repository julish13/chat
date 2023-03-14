import React from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '@store/redux/modal.js';
import NewChannelModal from './NewChannel/NewChannelModal.js';

const modals = {
  newChannel: <NewChannelModal />,
};

const Modal = () => {
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.modal.type);

  const onHide = () => {
    dispatch(modalActions.hideModal());
  };

  return (
    <BootstrapModal show={modalType !== null} centered onHide={onHide}>
      {modals[modalType]}
    </BootstrapModal>
  );
};

export default Modal;
