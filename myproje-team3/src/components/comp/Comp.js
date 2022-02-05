import React from "react";

const Comp = () => {
  const user = {
    adi: "Mucahit",
    age: 30,
  };

  return (
    <div>
      <div>Adi:{user.adi}</div>
      <div>Yasi: {user.age}</div>
    </div>
  );
};

export default Comp;
