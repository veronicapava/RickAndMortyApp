import React from "react";
import Character from "./Character";
import { connect } from "react-redux";
import { addToFavorites, deleteFromFavorites } from "../redux/actionCreator";

const Favorites = ({ favoritesCharacter }) => {
  return (
    <div className="container my-5">
      <h1>Favorites</h1>
      <div className="container mt-5">
        <div className="row">
          {favoritesCharacter.map((char) => (
            <Character character={char} key={char.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoritesCharacter: state.favoritesCharacter,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
