import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar text-uppercase">
      <div className="container">
        <h1>Rick and Morty App</h1>
        <Link to="/">Personajes</Link>
        <Link to="/episodes">Episodios</Link>
        <Link to="/favorites">Favoritos</Link>
      </div>
    </div>
  );
};

export default Header;
