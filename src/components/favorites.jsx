import Character from "./Character";
import { connect } from "react-redux";

const Favorites = ({ favoritesCharacter }) => {
  return (
    <div className="container my-5">
      <h1 className="text-uppercase text-center mb-5">Favorites</h1>
      <div className="container mt-5">
        <div className="row">
          {favoritesCharacter.map((char) => (
            <Character character={char} key={char.id} />
          ))}
          {favoritesCharacter.length == 0 && (
            <img className="rounded mx-auto d-block" src={process.env.PUBLIC_URL + "img/rickmorty2.jpg"} alt="logo" />
          )}
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
