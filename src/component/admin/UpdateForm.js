import React from "react";
import { Modal, Button, Row, Col, Form, Dropdown } from "react-bootstrap";
import ModalForm from "./ModalForm";
import { booleanLiteralTypeAnnotation } from "@babel/types";

export class UpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      carId: this.props.car.id,
      brand: this.props.car.brand,
      model: this.props.car.model,
      year: this.props.car.year,

      selectedBrandId: ""
    };
  }

  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  handleBrand = e => {
    this.setState({
      selectedBrandId: e.target.value
    });
    console.log(e.target.value);
  };

  componentDidMount() {
    /* fetch("http://localhost:8080/cars/" + this.props.carId)
      .then(response => response.json())
      .then(car => this.setState({ car }));
    console.log("componentdidmount");*/
  }

  render() {
    return (
      <>
        <Button variant="primary" size="sm" onClick={this.handleShow}>
          Edit
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit {this.props.car.brand}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Label>Brand</Form.Label>
              <Form.Control as="select" onClick={this.handleBrand}>
                {this.props.brandDropdwn.map(brand => (
                  <option key={brand.id} value={brand.id}>
                    {brand.brand}
                  </option>
                ))}
              </Form.Control>

              <Form.Label>Model</Form.Label>
              <Form.Control as="select" onClick={this.handleBrand}>
                {console.log(this.props.modelDropdwn)}
                {console.log(this.state.model)}
                {/* {this.props.modelDropdwn.map(model => (
                  <option key ={model.model} value={model.model} >{model.model}</option>
                ))} */}
              </Form.Control>

              <Form.Label>Year</Form.Label>
              <Form.Control as="select">
                <option>{this.state.year}</option>
                {this.props.yearDropdwn}
              </Form.Control>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default UpdateForm;
