import React, { Component } from "react";
import "./App.css";

import CarNavbar from "./components/navbar/CarNavbar";
import Login from "./components/forms/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CarList from "./components/carlist/CarList";
import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Switch>
            <Route exact path="/">
              <CarList />
            </Route>
            <Route path="/login">
              <CarNavbar />
              <Login />
            </Route>
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
