/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { modalActions } from '@store/redux/modal.js';
import WebSocketContext from '@store/context/web-socket-context';

const NewChannelForm = () => {
  const webSocketContext = useContext(WebSocketContext);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onCancel = () => {
    dispatch(modalActions.hideModal());
  };

  const submitHandler = (values) => {
    webSocketContext.addChannel(values);
    onCancel();
  };

  const formik = useFormik({
    initialValues: { name: '' },
    onSubmit: submitHandler,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Control
        className="mb-2"
        type="name"
        name="name"
        required
        {...formik.getFieldProps('name')}
      />
      <Form.Label htmlFor="name" className="visually-hidden">
        {t('modals.newChannel.label')}
      </Form.Label>
      <div className="d-flex justify-content-end">
        <Button variant="secondary" onClick={onCancel} type="button" className="me-2">
          {t('modals.newChannel.cancel')}
        </Button>
        <Button variant="primary" type="submit">
          {t('modals.newChannel.submit')}
        </Button>
      </div>
    </Form>
  );
};

export default NewChannelForm;
