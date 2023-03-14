import React from 'react';
import NewChannelModal from './NewChannelModal.js';

const modals = {
  newChannel: <NewChannelModal />,
};

const Modal = ({ type }) => modals[type];

export default Modal;
