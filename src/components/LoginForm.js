import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const { t } = useTranslation();
  return (
    <Form className='col-12 col-md-6 mt-3 mt-mb-0'>
      <h1>{t('login.enter')}</h1>
    </Form>
  )
};

export default LoginForm;