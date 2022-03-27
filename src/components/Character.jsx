import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addToFavorites, deleteFromFavorites } from "../redux/actionCreator";

const Character = ({ character, favoritesCharacter, addCharacterToFavorites, deleteCharacterFromFavorites }) => {
  const [liked, setLiked] = useState(false);

  const handleClick = (char) => {
    setLiked(!liked);
    !liked ? addCharacterToFavorites(char) : deleteCharacterFromFavorites(char);
  };

  useEffect(() => {
    let iamFavorite = favoritesCharacter.some((char) => char.id == character.id);
    if (iamFavorite) {
      setLiked(true);
    }
  }, []);

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

const mapStateToProps = (state) => ({
  favoritesCharacter: state.favoritesCharacter,
});

const mapDispatchToProps = (dispatch) => ({
  addCharacterToFavorites(character) {
    dispatch(addToFavorites(character));
  },

  deleteCharacterFromFavorites(character) {
    dispatch(deleteFromFavorites(character));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Character);
