import React, { Component } from "react";
import { Button } from "react-bootstrap";
import AddForm from "../forms/AddForm";

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      jwtToken: sessionStorage.getItem("jwt")
    };
  }

  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
    window.location.reload(true);
  };

  render() {
    if (this.state.jwtToken === null) {
      return null;
    } else {
      return (
        <React.Fragment>
          <Button variant="secondary" size="sm" onClick={this.handleShow}>
            Add a Car
          </Button>
          <AddForm
            showModal={this.state.show}
            hideModal={this.handleClose}
            jwtToken={this.state.jwtToken}
          ></AddForm>
        </React.Fragment>
      );
    }
  }
}
export default AddButton;
