import React from "react";
import { Form } from "react-bootstrap";

const ModelDropdown = props => {
  return (
    <Form.Control
      as="select"
      disabled={props.status}
      onChange={props.modelHandler}
    >
      {props.models.map(model => (
        <option key={model.model} value={model.model}>
          {model.model}
        </option>
      ))}
    </Form.Control>
  );
};

export default ModelDropdown;
