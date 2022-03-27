import React, { useState, useEffect } from "react";

const Character = ({ character }) => {
  const [liked, setLiked] = useState(false);
  const [likedCharacters, saveLikedCharacter] = useState({});

  const handleClick = (char) => {
    setLiked(!liked);
    !liked ? saveLikedCharacter(char) : saveLikedCharacter({});
  };

  return (
    <div className="col-4 mb-4">
      <div className="card">
        <img src={character.image} alt="" />
      </div>
      <div className="card-body">
        <h3>{character.name}</h3>
        <div>
          <button className="button" onClick={() => handleClick(character)}>
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
