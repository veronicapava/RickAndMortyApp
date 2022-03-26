import React from "react";

const Character = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((item) => (
        <div key={item.id} className="col">
          <div className="card">
            <img src={item.image} alt="" />
          </div>
          <div className="card-body">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Character;
