import React from "react";

const Service = (props) => {
  return (
    <div className="services-box">
      <img src={props.resim} alt="/" />
      <div className="services-content">
        <h5 className={props.baslik}>Graphic Design</h5>
        <p className={props.aciklama}>
          specialise in Graphic design Whether you need to create a new website
          or updat.
        </p>
      </div>
    </div>
  );
};

export default Service;
