import React, { useCallback, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { modalSelector } from '@store/redux/selectors.js';
import { modalActions } from '@store/redux/actions.js';
import WebSocketContext from '@store/context/web-socket-context';

const LOCALE_PATH = 'modals.removeChannel.';

const RemoveChannelModal = () => {
  const { t } = useTranslation();
  const webSocketContext = useContext(WebSocketContext);
  const dispatch = useDispatch();
  const {
    payload: { id },
  } = useSelector(modalSelector);

  const onHide = useCallback(() => {
    dispatch(modalActions.hideModal());
  }, []);

  const onSubmit = useCallback(() => {
    webSocketContext.removeChannel(id);
    onHide();
  }, [webSocketContext, id]);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t(`${LOCALE_PATH}title`)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="lead">{t(`${LOCALE_PATH}text`)}</p>
        <div className="d-flex justify-content-end">
          <Button className="me-2" variant="secondary" onClick={onHide}>
            {t(`${LOCALE_PATH}cancel`)}
          </Button>
          <Button variant="danger" onClick={onSubmit}>
            {t(`${LOCALE_PATH}submit`)}
          </Button>
        </div>
      </Modal.Body>
    </>
  );
};

export default RemoveChannelModal;
