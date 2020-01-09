import React, { Component } from "react";
import "./App.css";
import CarList from "./component/public/CarList";
import { Container } from "react-bootstrap";
import CarNavbar from "./component/public/CarNavbar";

class App extends Component {
  render() {
    return (
      <Container>
        <CarNavbar />

        <CarList />
      </Container>
    );
  }
}

export default App;
