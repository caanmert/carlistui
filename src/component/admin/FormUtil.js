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

  componentDidMount() {
    fetch("http://localhost:8080/brands")
      .then(response => response.json())
      .then(brands => this.setState({ brands }));
  }

  fetchModelByBrand = brandId => {
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

  render() {
    return (
      <React.Fragment>
        <Button variant="warning" size="sm" onClick={this.deleteBtn}>
          Delete
        </Button>
        <UpdateForm
          brandDropdwn={this.state.brands}
          modelDropdwn={this.fetchModelByBrand}
          yearDropdwn={this.getYearList()}
          car={this.props.car}
        />
      </React.Fragment>
    );
  }
}

export default FormUtil;
