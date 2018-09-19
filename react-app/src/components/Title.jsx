import React from "react";
import logo from "../bootstrap-solid.svg";

const Title = () => {
  return (
    <div className="py-5 text-center">
      <img
        className="d-block mx-auto mb-4"
        src={logo}
        alt=""
        width="72"
        height="72"
      />
      <h2>Controle de participantes</h2>
      <p className="lead">Resolução do exercicio</p>
    </div>
  );
};

export default Title;
