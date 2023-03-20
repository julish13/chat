/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useRef, useCallback, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '@store/redux/actions.js';
import { chatSelector } from '@store/redux/selectors.js';

const LOCALE_PATH = 'modals.channelNaming.';

const ChannelNamingForm = ({ onSubmit }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { channels } = useSelector(chatSelector);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const channelsNames = useMemo(() => channels.map(({ name }) => name), [channels]);

  const onCancel = useCallback(() => {
    dispatch(modalActions.hideModal());
  }, []);

  const submitHandler = useCallback(
    (values) => {
      onSubmit(values);
      onCancel();
    },
    [onSubmit]
  );

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

export default ChannelNamingForm;
