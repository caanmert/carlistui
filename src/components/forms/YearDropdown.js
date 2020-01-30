import React from "react";
import { Form } from "react-bootstrap";

const YearDropdown = props => {
  const year = new Date().getFullYear();
  const years = Array.from(new Array(50), (val, index) => year - index);
  return (
    <Form.Control
      as="select"
      disabled={props.status}
      onChange={props.yearHandler}
    >
      {years.map(year => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </Form.Control>
  );
};

export default YearDropdown;
