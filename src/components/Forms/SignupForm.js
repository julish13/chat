import React, { useContext, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthContext from '@store/context/auth-context.js';
import routes from '@src/routes.js';
import FormControl from './FormControl.js';

const url = routes.signupPath();
const LOCALE_PATH = 'signup.';
const STATE = {
  INITIAL: 'initial',
  PROCESSING: 'processing',
  FAILED: 'failed',
};

const INVALID_STATUS_CODES_TO_LOCALE_PATHS = {
  409: 'errorMessages.signupUniqueness',
};

const SignupForm = () => {
  const [state, setState] = useState(STATE.INITIAL);
  const [errorMessage, setErrorMessage] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const usernameInputRef = useRef();

  const schema = Yup.object({
    username: Yup.string()
      .trim()
      .required(t('errorMessages.required'))
      .min(3, t('errorMessages.usernameLength'))
      .max(20, t('errorMessages.usernameLength')),
    password: Yup.string()
      .trim()
      .required(t('errorMessages.required'))
      .min(6, t('errorMessages.passwordLength')),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password')],
      t('errorMessages.passwordConfirmation')
    ),
  });

  const submitHandler = async ({ username, password }) => {
    setState(STATE.PROCESSING);
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then(({ statusCode, message }) => {
          setState(STATE.FAILED);
          const messageLocalePath = INVALID_STATUS_CODES_TO_LOCALE_PATHS[statusCode];
          const newErrorMessage = (messageLocalePath && t(messageLocalePath)) || message;
          setErrorMessage(newErrorMessage);
          throw new Error(newErrorMessage);
        });
      })
      .then((data) => {
        login(data);
        navigate('/');
      })
      .catch((error) => {
        usernameInputRef.current.focus();
        console.error(error.message);
      });
  };

  const formik = useFormik({
    initialValues: { username: '', password: '', passwordConfirmation: '' },
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: submitHandler,
  });

  return (
    <Form className="w-50" onSubmit={formik.handleSubmit}>
      <h1 className="text-center mb-4">{t(`${LOCALE_PATH}title`)}</h1>
      <FormControl
        className="form-floating mb-3"
        id="username"
        label={t(`${LOCALE_PATH}username`)}
        placeholder={t('errorMessages.usernameLength')}
        required
        formik={formik}
        autoComplete="username"
        isInvalid={formik.touched.username && (formik.errors.username || state === STATE.FAILED)}
        errorMessage={formik.errors.username}
        autoFocus
        ref={usernameInputRef}
      />
      <FormControl
        className="form-floating mb-4"
        id="password"
        label={t(`${LOCALE_PATH}password`)}
        placeholder={t('errorMessages.passwordLength')}
        required
        formik={formik}
        autoComplete="current-password"
        isInvalid={formik.touched.password && (formik.errors.password || state === STATE.FAILED)}
        errorMessage={formik.errors.password}
        type="password"
      />
      <FormControl
        className="form-floating mb-4"
        id="passwordConfirmation"
        label={t(`${LOCALE_PATH}passwordConfirmation`)}
        placeholder={t('errorMessages.passwordConfirmation')}
        required
        formik={formik}
        isInvalid={
          formik.touched.passwordConfirmation &&
          (formik.errors.passwordConfirmation || state === STATE.FAILED)
        }
        errorMessage={formik.errors.passwordConfirmation || errorMessage}
        type="password"
      />
      <Button
        type="submit"
        variant="outline-primary"
        className="w-100 mb-3"
        disabled={state === STATE.PROCESSING}
      >
        {t(`${LOCALE_PATH}submit`)}
      </Button>
    </Form>
  );
};

export default SignupForm;
