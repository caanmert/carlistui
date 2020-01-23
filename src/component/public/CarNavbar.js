import React from "react";
import { Nav } from "react-bootstrap";

const CarNavbar = () => {
  return (
    <Nav className="navbar fixed-top navbar-dark bg-dark">
      <Nav.Item>
        <Nav.Link href="#">CarList</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default CarNavbar;
