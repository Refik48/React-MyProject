import React, { useState } from "react";
import { Button } from "react-bootstrap";
//* oncelikle useState import edilmeli

const State = () => {
  //* 2. useState tanimlanmali
  //* sayac degiskeni ,degeri saklar, setSayac ise degeri degistiren method'dur
  const [sayac, setSayac] = useState(0);

  const artir = () => {
    setSayac(sayac + 1);
  };

  return (
    <div>
      <h1>Sayac degeri: {sayac}</h1>
      <Button variant="info" onClick={artir}>
        Artir
      </Button>
    </div>
  );
};

export default State;
