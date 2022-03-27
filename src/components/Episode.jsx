import React from "react";

const Episode = ({ episodes }) => {
  return (
    <div className="row">
      {episodes.map((item) => (
        <div key={item.id} className="col-4 mb-4">
          <div className="card">
            <h2>{item.name}</h2>
            <h3>{item.air_date}</h3>
            <h3>{item.episode}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Episode;
