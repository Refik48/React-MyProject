import React, { useState } from "react";
import { Button } from "react-bootstrap";
// 1. onceliklee useState import edilmeli
const State = () => {
  const [sayac, setSayac] = useState();

  return (
    <div>
      <h1>Sayac degeri: {sayac}</h1>
      <Button variant="info" onClick={() => setSayac(sayac + 1)}>
        Artir
      </Button>
    </div>
  );
};

export default State;
