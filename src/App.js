import React, { Component } from "react";
import "./App.css";
import CarList from "./component/public/CarList";
import { Container } from "react-bootstrap";
import CarNavbar from "./component/public/CarNavbar";
import AddCar from "./component/admin/AddCar";
import Login from "./component/admin/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <CarNavbar />
            <CarList />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
