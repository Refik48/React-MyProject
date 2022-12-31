import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import data from "../../data/persons.json";
import Person from "./Person";
const Birthday = () => {
  const [persons, setPersons] = useState(data);
  const temizle = () => {
    setPersons([]);
  };
  const yukle = () => {
    setPersons(data);
  };

  // persons'un ici dizi ise setPersons'un icine bos dizi icin [] konur
  // persons'un ici obje  ise setPersons'un icine bos obje icin {} konur
  // persons'un ici string ise setPersons'un icine bos string icin " " konur
  // persons'un ici sayi ise setPersons'un icine bos sayi icin 0 konur
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h1>Bugun Doganlar</h1>
          <p>Bugun dogan {persons.length} kisi bulundu</p>
        </Card.Title>
        {persons.map((item) => {
          const { id, image, name, age } = item;
          return <Person image={image} name={name} age={age} key={id} />;
        })}
        <Button variant="danger" onClick={temizle}>
          Temizle
        </Button>
        <Button variant="success" onClick={yukle}>
          Temizle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Birthday;
