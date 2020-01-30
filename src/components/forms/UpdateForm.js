import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import BrandDropdown from "./BrandDropdown";
import ModelDropdown from "./ModelDropdown";
import YearDropdown from "./YearDropdown";

class UpdateForm extends Component {
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
    this.baseState = this.state;
  }

  componentDidMount() {
    this.fetchBrands();
  }

  fetchBrands = () => {
    fetch("http://localhost:8080/brands", {
      method: "GET",
      headers: {
        Authorization: this.props.jwtToken
      }
    })
      .then(response => response.json())
      .then(brands => this.setState({ brands }));
  };
  updateCar = car => {
    fetch("http://localhost:8080/cars/" + this.props.carid, {
      method: "PUT",
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
  handleCLose = () => {
    //this.setState(this.baseState);
    this.props.hideModal();
    window.location.reload(true);
  };

  handleSubmit = () => {
    var car = {
      brand: this.state.selectedBrandname,
      model: this.state.selectedModel,
      year: this.state.selectedYear
    };
    this.updateCar(car);
    window.location.reload(true);
  };

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.handleCLose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
          <Button variant="secondary" onClick={this.handleCLose}>
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
    );
  }
}

export default UpdateForm;
