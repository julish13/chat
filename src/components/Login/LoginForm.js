import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import routes from '@src/routes.js';
import AuthContext from '@store/context/auth-context.js';
import FormControl from './FormControl.js';

const url = routes.loginPath();

const LoginForm = () => {
  const [authenticationFailed, setAuthenticationFailed] = useState(false);
  const { t } = useTranslation();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then(() => {
          setAuthenticationFailed(true);
          const errorMessage = 'Authentication failed!';
          throw new Error(errorMessage);
        });
      })
      .then((data) => {
        login(data);
        navigate('/');
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    onSubmit: (values) => {
      submitHandler(values);
    },
  });

  return (
    <Form className="col-12 col-md-6 mt-3 mt-mb-0" onSubmit={formik.handleSubmit}>
      <h1>{t('login.enter')}</h1>
      <FormControl
        className="form-floating mb-3"
        id="username"
        label={t('login.username')}
        placeholder={t('login.username')}
        required
        formik={formik}
        autoComplete="username"
        isInvalid={authenticationFailed}
      />
      <FormControl
        className="form-floating mb-4"
        id="password"
        label={t('login.password')}
        placeholder={t('login.password')}
        required
        formik={formik}
        autoComplete="current-password"
        showError
        isInvalid={authenticationFailed}
      />
      <Button
        type="submit"
        variant="outline-primary"
        className="w-100 mb-3"
        onBlur={() => setAuthenticationFailed(false)}
      >
        {t('login.enter')}
      </Button>
    </Form>
  );
};

export default LoginForm;
