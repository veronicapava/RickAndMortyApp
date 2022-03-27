import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar text-uppercase">
      <div className="container">
        <h1>Rick and Morty App</h1>
        <Link to="/">Characters</Link>
        <Link to="/episodes">Episodes</Link>
        <Link to="/searcher">Searcher</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
};

export default Header;
