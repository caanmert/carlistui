import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import AddButton from "./AddButton";
import LoginControl from "./LoginControl";

class CarNavbar extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav className="navbar fixed-top navbar-dark bg-dark navbarSet">
          <AddButton />
          <Nav.Item>
            <Nav.Link href="/">CarList</Nav.Link>
          </Nav.Item>

          <LoginControl />
        </Nav>
      </React.Fragment>
    );
  }
}

export default CarNavbar;
