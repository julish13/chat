/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useMemo, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '@store/redux/actions.js';
import { chatSelector } from '@store/redux/selectors.js';
import WebSocketContext from '@store/context/web-socket-context';

const LOCALE_PATH = 'modals.newChannel.';

const NewChannelForm = () => {
  const webSocketContext = useContext(WebSocketContext);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { channels } = useSelector(chatSelector);
  const inputRef = useRef();

  const channelsNames = useMemo(() => channels.map(({ name }) => name), [channels]);

  const onCancel = () => {
    dispatch(modalActions.hideModal());
  };

  const submitHandler = (values) => {
    webSocketContext.addChannel(values);
    onCancel();
  };

  const schema = Yup.object({
    name: Yup.string()
      .trim()
      .required(t('errorMessages.required'))
      .notOneOf(channelsNames, t('errorMessages.unique')),
  });

  const formik = useFormik({
    initialValues: { name: '' },
    validationSchema: schema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: submitHandler,
    validate: () => {
      inputRef.current.focus();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Control
        ref={inputRef}
        className="mb-2"
        type="name"
        name="name"
        isInvalid={formik.errors.name}
        autoFocus
        {...formik.getFieldProps('name')}
      />
      <Form.Label htmlFor="name" className="visually-hidden">
        {t(`${LOCALE_PATH}label`)}
      </Form.Label>
      <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
      <div className="d-flex justify-content-end">
        <Button variant="secondary" onClick={onCancel} type="button" className="me-2">
          {t(`${LOCALE_PATH}cancel`)}
        </Button>
        <Button variant="primary" type="submit">
          {t(`${LOCALE_PATH}submit`)}
        </Button>
      </div>
    </Form>
  );
};

export default NewChannelForm;
