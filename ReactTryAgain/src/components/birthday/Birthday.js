import React from "react";
import { Card } from "react-bootstrap";

import data from "../../data/persons.json";
import Person from "./Person";
const Birthday = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h1>Bugun Doganlar</h1>
          <p>Bugun dogan 5 kisi bulundu</p>
        </Card.Title>
        {data.map((item) => {
         const {id,image,name,age} = item;
          return (
            <Person
              image={image}
              name={name}
              age={age}
              key={id}
            />
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default Birthday;
