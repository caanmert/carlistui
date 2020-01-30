import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwtToken: sessionStorage.getItem("jwt")
    };
  }
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  handleSubmit = () => {
    console.log(this.props.car.id);
    this.delete(this.props.car.id);
  };

  delete = () => {
    fetch("http://localhost:8080/cars/" + this.props.car.id, {
      method: "delete",
      headers: {
        Authorization: this.state.jwtToken,
        "Content-Type": "application/json"
      }
    }).then(() => {
      window.location.reload(true);
    });
  };
  render() {
    if (this.state.jwtToken === null) {
      return null;
    } else {
      return (
        <>
          <Button variant="secondary" size="sm" onClick={this.handleShow}>
            Delete
          </Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Remove</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.delete}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
}
export default DeleteButton;
