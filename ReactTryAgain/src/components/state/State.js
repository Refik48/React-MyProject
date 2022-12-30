import React, { useState } from "react";
import { Button } from "react-bootstrap";
// 1. onceliklee useState import edilmeli
const State = () => {
  const [sayac, setSayac] = useState();
  const artir=() =>{
     setSayac(sayac + 1);
  }

  return (
    <div>
      <h1>Sayac degeri: {sayac}</h1>
      <Button variant="info" onClick={() => setSayac(artir)}>
        Artir
      </Button>
    </div>
  );
};

export default State;
