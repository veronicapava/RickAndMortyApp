import React, { useState, useEffect } from "react";

const Character = ({ character, key }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div key={key} className="col-4 mb-4">
      <div className="card">
        <img src={character.image} alt="" />
      </div>
      <div className="card-body">
        <h3>{character.name}</h3>
        <div>
          <button className="button" onClick={() => setLiked(!liked)}>
            {liked ? "❤️" : "🤍"}
          </button>
        </div>
        <p>Status: {character.status}</p>
        <p>Specie: {character.species}</p>
      </div>
    </div>
  );
};

export default Character;

{
  /* <h3>{character.liked}</h3> */
}

{
  /* <button
                className="button"
                onClick={() => {
                  console.log("changin on character id " + character.id);
                  character.liked = !character.liked;
                  console.log("New value " + character.liked);
                }}
              >
                {character.liked ? "❤️" : "🤍"}
              </button> */
}
