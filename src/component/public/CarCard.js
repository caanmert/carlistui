import React from "react";
import { Card, Col } from "react-bootstrap";

const CarCard = props => {
  return (
    <Col>
      <Card className="text-center" style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          src="http://appalachiantrail.org/images/default-source/default-album/trailfocus.jpg?sfvrsn=2"
        />
        <Card.Body>
          <Card.Title>{props.car.id}</Card.Title>
          <Card.Title>{props.car.brand}</Card.Title>
          <Card.Title>{props.car.model}</Card.Title>
          <Card.Title>{props.car.year}</Card.Title>

          <Card.Text></Card.Text>
          {props.children}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <br />
    </Col>
  );
};

export default CarCard;
