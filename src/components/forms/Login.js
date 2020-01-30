import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isAuthenticated: false,
      open: false,
      failed: false,
      jwtToken: sessionStorage.getItem("jwt")
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    var user = {
      username: this.state.username,
      password: this.state.password
    };
    this.checkLogin(user);
  };

  checkLogin = user => {
    fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify(user)
    })
      .then(res => {
        this.setState({ failed: res });
        const jwtToken = res.headers.get("Authorization");
        if (jwtToken !== null) {
          sessionStorage.setItem("jwt", jwtToken);
          this.setState({ isAuthenticated: true });
        } else {
          this.setState({ open: true, failed: true });
        }
      })
      .catch(err => console.error(err));
    console.log(this.state.failed);
  };

  render() {
    if (this.state.isAuthenticated === true || this.state.jwtToken !== null) {
      return <Redirect to={{ pathname: "/" }} />;
    } else {
      return (
        <Form>
          <Form.Group controlId="formBasicEmail">
            {this.state.failed === true && (
              <p>Your login credentials are wrong, Try again.</p>
            )}
            <Form.Label>Username</Form.Label>
            <Form.Control
              onSubmit={this.handleSubmit}
              name="username"
              onChange={this.handleChange}
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              onChange={this.handleChange}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit} type="submit">
            Submit
          </Button>
        </Form>
      );
    }
  }
}
export default Login;
