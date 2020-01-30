import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginButton = props => {
  return (
    <React.Fragment>
      <Link to={"/login"}>
        <Button variant="primary" size="sm">
          Login
        </Button>
      </Link>
    </React.Fragment>
  );
};

export default LoginButton;
