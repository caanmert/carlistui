import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import BrandDropdown from "./BrandDropdown";
import ModelDropdown from "./ModelDropdown";
import YearDropdown from "./YearDropdown";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBrandId: "",
      selectedBrandname: "",
      selectedModel: "",
      selectedYear: "",

      modelDrpDownDisabled: true,
      yearDrpDownDisabled: true,
      submitBtnDisabled: true,
      brands: [],
      models: [],
      years: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/brands", {
      method: "GET",
      headers: {
        Authorization: this.props.jwtToken
      }
    })
      .then(response => response.json())
      .then(brands => this.setState({ brands }));
  }

  addCar = car => {
    console.log("updateCarthing" + this.props.carid);
    fetch("http://localhost:8080/cars/", {
      method: "POST",
      headers: {
        Authorization: this.props.jwtToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(car)
    }).catch(error => console.log(error));
  };

  fetchModelsByBrandId = brandId => {
    fetch("http://localhost:8080/models/" + brandId, {
      headers: {
        Authorization: this.props.jwtToken
      }
    })
      .then(response => response.json())
      .then(models => this.setState({ models }));
  };

  brandHandler = e => {
    this.setState(
      {
        selectedBrandId: e.target.value,
        selectedBrandname: e.target.selectedOptions[0].text,
        modelDrpDownDisabled: false
      },
      () => {
        this.fetchModelsByBrandId(this.state.selectedBrandId);
      }
    );
  };
  modelHandler = e => {
    this.setState({
      selectedModel: e.target.value,
      yearDrpDownDisabled: false
    });
  };

  yearHandler = e => {
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
    this.addCar(car);
    window.location.reload(true);
  };

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Brand
          <BrandDropdown
            brands={this.state.brands}
            brandHandler={this.brandHandler}
          ></BrandDropdown>
          Model
          <ModelDropdown
            models={this.state.models}
            modelHandler={this.modelHandler}
            status={this.state.modelDrpDownDisabled}
          ></ModelDropdown>
          Year
          <YearDropdown
            yearHandler={this.yearHandler}
            status={this.state.yearDrpDownDisabled}
          ></YearDropdown>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hideModal}>
            Close
          </Button>
          <Button
            variant="primary"
            disabled={this.state.submitBtnDisabled}
            onClick={this.handleSubmit}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddForm;
