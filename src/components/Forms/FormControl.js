/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import { Form } from 'react-bootstrap';

const FormControl = forwardRef(function FormControl(
  {
    id,
    placeholder,
    label,
    required = false,
    formik,
    className,
    type,
    autoComplete,
    isInvalid,
    showError = true,
    errorMessage,
    feedbackPlacement,
    autoFocus,
  },
  ref
) {
  return (
    <Form.Group className={className} controlId={id}>
      <Form.Control
        type={type}
        name={id}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        isInvalid={isInvalid}
        autoFocus={autoFocus}
        ref={ref}
        {...formik.getFieldProps(id)}
      />
      <Form.Label>{label}</Form.Label>
      {showError && isInvalid && (
        <Form.Control.Feedback type="invalid" tooltip placement={feedbackPlacement}>
          {errorMessage}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
});

export default FormControl;
