import React, { Component } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwtToken: sessionStorage.getItem("jwt")
    };
  }

  render() {
    if (this.state.jwtToken === null) {
      return <LoginButton />;
    } else {
      return <LogoutButton />;
    }
  }
}

export default LoginControl;
