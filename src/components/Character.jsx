import React from "react";

const Character = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((item) => (
        <div key={item.id} className="col-4 mb-4">
          <div className="card">
            <img src={item.image} alt="" />
          </div>
          <div className="card-body">
            <h3>{item.name}</h3>
            <p>Status: {item.status}</p>
            <p>Specie: {item.species}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Character;
