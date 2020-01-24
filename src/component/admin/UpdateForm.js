import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export class UpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,

      selectedBrandId: "",
      selectedBrandname: "",
      selectedModel: "",
      selectedYear: "",

      modelDrpDownDisabled: true,
      yearDrpDownDisabled: true,
      submitBtnDisabled: true
    };
  }

  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({
      show: false,
      modelDrpDownDisabled: true,
      yearDrpDownDisabled: true
    });
    window.location.reload(true);
  };

  handleBrand = e => {
    this.setState(
      {
        selectedBrandId: e.target.value,
        selectedBrandname: e.target.selectedOptions[0].text,
        modelDrpDownDisabled: false
      },
      () => {
        this.props.modelDropdwn(this.state.selectedBrandId);
      }
    );
  };
  handleModel = e => {
    this.setState({
      selectedModel: e.target.value,
      yearDrpDownDisabled: false
    });
  };

  handleYear = e => {
    this.setState({
      selectedYear: e.target.selectedOptions[0].text,
      submitBtnDisabled: false
    });
  };

  handleSubmit = () => {
    var car = {
      brand: this.state.selectedBrandname,
      model: this.state.selectedModel,
      year: this.state.selectedYear
    };
    this.props.updateCar(car);
    window.location.reload(true);
  };

  render() {
    return (
      <>
        <Button variant="primary" size="sm" onClick={this.handleShow}>
          Edit
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                as="select"
                disabled={false}
                onChange={this.handleBrand}
              >
                {this.props.brandDropdwn.map(brand => (
                  <option key={brand.id} value={brand.id}>
                    {brand.brand}
                  </option>
                ))}
              </Form.Control>

              <Form.Label>Model</Form.Label>
              <Form.Control
                as="select"
                disabled={this.state.modelDrpDownDisabled}
                onChange={this.handleModel}
              >
                {this.props.models.map(model => (
                  <option key={model.model} value={model.model}>
                    {model.model}
                  </option>
                ))}
              </Form.Control>

              <Form.Label>Year</Form.Label>
              <Form.Control
                as="select"
                disabled={this.state.yearDrpDownDisabled}
                onChange={this.handleYear}
              >
                <option></option>
                {this.props.yearDropdwn}
              </Form.Control>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              disabled={this.state.submitBtnDisabled}
              onClick={this.handleSubmit}
            >
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default UpdateForm;
