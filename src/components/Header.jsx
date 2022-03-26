import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar text-uppercase">
      <div className="container">
        <h1>Rick and Morty App</h1>
        <Link to="/">Personajes</Link>
        <Link to="/episodios">Episodios</Link>
        <Link to="/favoritos">Favoritos</Link>
      </div>
      <section>
        <Routes>
          <Route exact path="/" />
          <Route path="/episodios" element={<h1>episodios</h1>} />
          <Route path="/favoritos" element={<h1>favoritos</h1>} />
        </Routes>
      </section>
    </div>
  );
};

export default Header;
