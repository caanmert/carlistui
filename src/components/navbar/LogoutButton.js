import React from "react";
import { Button } from "react-bootstrap";

const LogoutButton = () => {
  const handleShow = () => {
    sessionStorage.clear();
    window.location.reload(true);
  };
  return (
    <Button variant="primary" size="sm" onClick={handleShow}>
      Logout
    </Button>
  );
};

export default LogoutButton;
