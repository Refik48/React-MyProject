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

  /* state yerine normal bir değişken ile yapılabilir mi?  olmuyor.* /
  /*
  var sayac = 0;
  const artir = () => {
    sayac = sayac + 1;
    console.log(sayac);
  };
*/

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
