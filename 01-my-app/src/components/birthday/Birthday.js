import React, { useState } from "react";
import { Card,  Button} from "react-bootstrap";
import Person from "./Person";
import data from "../../data/persons.json";

const Birthday = () => {
  const [persons, setPersons] = useState(data);
  const temizle=()=>{
   setPersons([]);  /* Diziyi bosaltmak icin [] , stringi bosaltmak icin "" , objeyi bosaltmak icin {} kullaniriz. */
  }

  const yukle=()=>{

   setPersons(data);
  }
  return (
    <Card>
      <Card.Body>
        <h1>Bugun Doganlar</h1>
        <p>Bugun dogan {persons.length} kisi bulundu</p>

        {persons.map((item) => {
          const { id, image, name, age } = item;
          return <Person image={image} name={name} age={age} key={id} />;
        })}
        {/* klasik yontemle.... */}
        {/* <Person image="photo-01.jpg" name="Banu Korkut" age="22" />
        <Person image="photo-02.jpg" name="Huseyin Sahin" age="45" /> */}

        <Button variant="danger" onClick={temizle}>
          Temizle
        </Button>
        <Button variant="success" onClick={yukle}>
          Yukle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Birthday;
