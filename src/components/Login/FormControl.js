/* eslint-disable react/jsx-props-no-spreading */
import { useTranslation } from 'react-i18next';
import { Form } from 'react-bootstrap';

const FormControl = ({
  id,
  placeholder,
  label,
  required = false,
  formik,
  className,
  type,
  autoComplete,
  isInvalid,
  showError,
}) => {
  const { t } = useTranslation();

  return (
    <Form.Group className={className} controlId={id}>
      <Form.Control
        type={type}
        name={id}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        isInvalid={isInvalid}
        {...formik.getFieldProps(id)}
      />
      <Form.Label>{label}</Form.Label>
      {showError && (
        <Form.Control.Feedback type="invalid" tooltip>
          {t('errorMessages.authentication')}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default FormControl;
