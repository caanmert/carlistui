import React, { Component } from "react";
import { Button } from "react-bootstrap";
import UpdateForm from "../forms/UpdateForm";

class UpdateButton extends Component {
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
    // window.location.reload(true);
  };
  render() {
    if (this.state.jwtToken === null) {
      return null;
    } else {
      return (
        <React.Fragment>
          <Button variant="primary" size="sm" onClick={this.handleShow}>
            Update
          </Button>
          <UpdateForm
            showModal={this.state.show}
            hideModal={this.handleClose}
            carid={this.props.car.id}
            jwtToken={this.state.jwtToken}
          ></UpdateForm>
        </React.Fragment>
      );
    }
  }
}
export default UpdateButton;
