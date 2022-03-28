import React from "react";

const Episode = ({ episodes }) => {
  return (
    <div className="row">
      {episodes.map((item) => (
        <div key={item.id} className="col-3 mb-4">
          <div className="card">
            <img className="card-img-top" src={process.env.PUBLIC_URL + "img/rickandmorty.jpg"} alt="rickandmorty" />
            {console.log(process.env)}
            <h2>Name: {item.name}</h2>
            <h3>Air date: {item.air_date}</h3>
            <h3>Season: {item.episode}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Episode;
