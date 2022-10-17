/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useRef, useState } from 'react';
import { InputGroup, Form, Overlay, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import WebSocketContext from '@store/context/web-socket-context';
import AuthContext from '@store/context/auth-context.js';
import InputSvg from '@assets/img/chat-input.svg';

const MessageForm = ({ channelId }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();
  const webSocketContext = useContext(WebSocketContext);
  const authContext = useContext(AuthContext);
  const formRef = useRef();
  const inputRef = useRef();

  const submitHandler = ({ body }) => {
    webSocketContext.sendMessage(
      {
        body,
        channelId,
        username: authContext.username,
      },
      setIsSubmitting
    );
  };

  const schema = Yup.object().shape({
    body: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: { body: '' },
    onSubmit: (values, actions) => {
      submitHandler(values);
      actions.resetForm();
      inputRef.current.focus();
    },
    validateOnMount: true,
    validationSchema: schema,
  });

  return (
    <div className="mt-auto px-5 py-3">
      <form
        className="py-1 border rounded-2"
        noValidate
        onSubmit={formik.handleSubmit}
        ref={formRef}
      >
        <InputGroup hasValidation>
          <Overlay target={formRef.current} show={webSocketContext.hasError} placement="top-end">
            {({ placement, arrowProps, show: _show, popper, ...props }) => (
              <div
                {...props}
                style={{
                  position: 'absolute',
                  backgroundColor: 'rgba(255, 100, 100, 0.85)',
                  padding: '2px 10px',
                  color: 'white',
                  borderRadius: 3,
                  ...props.style,
                }}
              >
                {t('errorMessages.network')}
              </div>
            )}
          </Overlay>
          <Form.Control
            ref={inputRef}
            name="body"
            aria-label={t('chat.input.label')}
            placeholder={t('chat.input.placeholder')}
            className="border-0 p-0 ps-2 form-control"
            id="body"
            {...formik.getFieldProps('body')}
          />

          <button
            className="btn btn-group-vertical d-flex justify-content-center align-items-center"
            type="submit"
            disabled={!formik.isValid || isSubmitting}
            style={{
              width: '46px',
              height: '34px',
            }}
          >
            {isSubmitting ? (
              <Spinner animation="border" variant="secondary" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <>
                <InputSvg />
                <span className="visually-hidden">{t('chat.input.submit')}</span>
              </>
            )}
          </button>
        </InputGroup>
      </form>
    </div>
  );
};

export default MessageForm;
