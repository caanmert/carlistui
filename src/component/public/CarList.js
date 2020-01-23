import React, { Component } from "react";
import { CardDeck, Row } from "react-bootstrap";
import "./css/CarList.css";
import CarCard from "./CarCard.js";
import axios from "axios";
import FormUtil from "../admin/FormUtil";
import AddCar from "../admin/AddCar";

export class CarList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "",
      cars: []
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    fetch("http://localhost:8080/cars")
      .then(response => response.json())
      .then(cars => this.setState({ cars }));
  };

  getYearList = () => {
    const year = new Date().getFullYear();
    return Array.from(new Array(50), (v, i) => (
      <option key={i}>{year - i}</option>
    ));
  };

  deleteHandler = id => {
    /*const cars = this.state.cars.filter(car => car.id !== id)
    this.setState({cars});
    axios.delete("http://localhost:8080/cars/" + id).then(response => {
      console.log(response);
    });*/
    axios
      .delete("http://localhost:8080/cars/" + id)
      .then(() => {
        return axios.get("http://localhost:8080/cars");
      })
      .then(response => {
        const cars = response.data;
        this.setState({ cars });
      });
  };

  /*updateHandler = id => {
    return <UpdateForm />;
  };*/

  render() {
    return (
      <CardDeck>
        <Row>
          <AddCar />
          {this.state.cars.map(car => (
            <CarCard
              key={car.id}
              car={car}
              deleteBtn={() => this.deleteHandler(car.id)}
            >
              <FormUtil car={car} />
            </CarCard>
          ))}
        </Row>
      </CardDeck>
    );
  }
}

export default CarList;
