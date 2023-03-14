import React from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '@store/redux/actions.js';
import { modalSelector } from '@store/redux/selectors.js';
import NewChannelModal from './NewChannel/NewChannelModal.js';

const modals = {
  newChannel: <NewChannelModal />,
};

const Modal = () => {
  const dispatch = useDispatch();
  const { type: modalType } = useSelector(modalSelector);

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
