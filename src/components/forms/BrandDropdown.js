import React from "react";
import { Form } from "react-bootstrap";

const BrandDropdown = props => {
  return (
    <Form.Control as="select" disabled={false} onChange={props.brandHandler}>
      {props.brands.map(brand => (
        <option key={brand.id} value={brand.id}>
          {brand.brand}
        </option>
      ))}
    </Form.Control>
  );
};

export default BrandDropdown;
