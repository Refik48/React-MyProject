import React from "react";
import image2 from "../../assets/img/image2.jpg";
const Image = () => {
 console.log(require("../../assets/img/image3.jpg"));
  return (
    <div>
      <div>
        <h3>Statik yontem</h3>
        <img src="assets/img/image1.jpg" />
      </div>
      <div>
        <h2>Imoort yontemi</h2>
        <img src={image2} />
      </div>
      <div>
        <h2>Reguire yontemi</h2>
        <img src={require("../../assets/img/image3.jpg")} />
      </div>
    </div>
  );
};

export default Image;
