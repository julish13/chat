import { Form } from 'react-bootstrap';

const FormControl = ({
  id,
  placeholder,
  label,
  required = false,
  formik,
  className,
  type,
  autoComplete
}) => {
  return (
    <Form.Group className={className} controlId={id}>
      <Form.Control
        type={type}
        name={id}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        {...formik.getFieldProps(id)}
      />
      <Form.Label>{label}</Form.Label>
    </Form.Group>
  );
};

export default FormControl;
