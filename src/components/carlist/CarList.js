import React, { Component } from "react";
import { CardDeck, Row, Container } from "react-bootstrap";
import CarCard from "../carCard/CarCard";
import CarNavbar from "../navbar/CarNavbar";
import "../css/CarList.css";
class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "",
      cars: [],
      isLoggedIn: false,
      jwtToken: sessionStorage.getItem("jwt")
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/cars")
      .then(response => response.json())
      .then(cars => this.setState({ cars }));
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <CarNavbar />
          <CardDeck>
            <Row>
              {this.state.cars.map(car => (
                <CarCard key={car.id} car={car}></CarCard>
              ))}
            </Row>
          </CardDeck>
        </Container>
      </React.Fragment>
    );
  }
}

export default CarList;
