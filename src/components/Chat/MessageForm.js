/* eslint-disable react/jsx-props-no-spreading */
import { InputGroup, Form, ButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import InputSvg from '@assets/img/chat-input.svg';

const MessageForm = () => {
  const { t } = useTranslation();

  const submitHandler = () => {};

  const formik = useFormik({
    initialValues: { body: '' },
    onSubmit: (values) => {
      submitHandler(values);
    },
  });

  return (
    <div className="mt-auto px-5 py-3">
      <form className="py-1 border rounded-2" noValidate onSubmit={formik.handleSubmit}>
        <InputGroup hasValidation>
          <Form.Control
            name="body"
            aria-label={t('chat.input.label')}
            placeholder={t('chat.input.placeholder')}
            className="border-0 p-0 ps-2 form-control"
            id="body"
            {...formik.getFieldProps('body')}
          />
          <ButtonGroup vertical className="btn" type="submit">
            <InputSvg />
            <span className="visually-hidden">{t('chat.input.submit')}</span>
          </ButtonGroup>
        </InputGroup>
      </form>
    </div>
  );
};

export default MessageForm;
