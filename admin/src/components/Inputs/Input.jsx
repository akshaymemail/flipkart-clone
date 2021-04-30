import React from "react";
import Form from "react-bootstrap/Form";

function Input({ label, type, placeholder, text }) {
  return (
    <Form.Group controlId={`fromBasic${type.charAt(0).toUpperCase() + type.slice(1)}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} />
      <Form.Text className="text-muted">{text}</Form.Text>
    </Form.Group>
  );
}

export default Input;
