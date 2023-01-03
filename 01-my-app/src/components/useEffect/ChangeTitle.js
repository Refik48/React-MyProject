import React, { useState, useEffect } from "react";

const ChangeTitle = () => {
  const [sayac, setSayac] = useState(0);
  const artir = () => {
    setSayac(sayac + 1);
  };

  useEffect(() => {
    document.title = `${sayac} kere tiklandi`;
  }, [sayac]);
  return (
    <div>
    //?  <title>{sayac} kere tikladin</title>  //? bu kisim basit olarak title'da yazmak icin.biz title ulasmamiz lazim..ama dom ile ulasabilirim.
      <h2>{sayac} kere tikladin</h2>
      <button onClick={artir}>TIKLA</button>
    </div>
  );
};

export default ChangeTitle;
