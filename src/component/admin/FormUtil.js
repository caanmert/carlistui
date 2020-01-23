import React from "react";
import UpdateForm from "../admin/UpdateForm";
import { Button } from "react-bootstrap";
export class FormUtil extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brands: [],
      models: []
    };
  }

  refreshList = () => {
    fetch("http://localhost:8080/cars")
      .then(response => response.json())
      .then(cars => this.setState({ cars }));
  };

  componentDidMount() {
    fetch("http://localhost:8080/brands")
      .then(response => response.json())
      .then(brands => this.setState({ brands }));
  }

  fetchModelsByBrand = brandId => {
    console.log("amcik seni" + brandId);
    fetch("http://localhost:8080/models/" + brandId)
      .then(response => response.json())
      .then(models => this.setState({ models }));
  };
  getYearList = () => {
    const year = new Date().getFullYear();
    return Array.from(new Array(50), (v, i) => (
      <option key={i}>{year - i}</option>
    ));
  };

  updateCar = car => {
    console.log("updateCarthing" + this.props.car.id);
    fetch("http://localhost:8080/cars/" + this.props.car.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(car)
    })
      .then(() => this.refreshList())
      .catch(error => console.log(error));
  };

  render() {
    return (
      <React.Fragment>
        <Button variant="warning" size="sm" onClick={this.deleteBtn}>
          Delete
        </Button>
        <UpdateForm
          brandDropdwn={this.state.brands}
          modelDropdwn={this.fetchModelsByBrand}
          models={this.state.models}
          yearDropdwn={this.getYearList()}
          car={this.props.car}
          updateCar={this.updateCar}
        />
      </React.Fragment>
    );
  }
}

export default FormUtil;
