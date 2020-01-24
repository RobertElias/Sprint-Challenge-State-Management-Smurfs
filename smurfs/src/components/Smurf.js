import React from "react";

const Smurf = ({ smurf }) => {
  return (
    <div>
      <h1>Name:{smurf.name}</h1>
      <h1>Age: {smurf.age}</h1>
      <h1>Height: {smurf.height}</h1>
    </div>
  );
};

export default Smurf;
