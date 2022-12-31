import React from "react";
import { Card } from "react-bootstrap";

const Person = (props) => {
  const { image, name, age } = props;
  return (
    <div>
      <Card>
        <Card.Body className="d-flex">
          <Card.Img variant="top" src={image} />
          <div>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{age}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Person;
