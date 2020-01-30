import React from "react";
import { Card, Col } from "react-bootstrap";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";
import EmptycarImage from "../css/emptycar.jpeg";

const CarCard = props => {
  return (
    <Col>
      <Card className="text-center" style={{ width: "15rem" }}>
        <Card.Img variant="top" src={EmptycarImage} />
        <Card.Body>
          <Card.Title>{props.car.brand}</Card.Title>
          <Card.Title>{props.car.model}</Card.Title>
          <Card.Title>{props.car.year}</Card.Title>

          <Card.Text></Card.Text>
          <DeleteButton car={props.car} />
          <UpdateButton car={props.car} />
        </Card.Body>
      </Card>
      <br />
    </Col>
  );
};

export default CarCard;
