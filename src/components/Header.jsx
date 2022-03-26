import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar text-uppercase">
      <div className="container">
        <h1>Rick and Morty App</h1>
        <Link to='/'>Personajes</Link>
        <Link to='/'>Episodios</Link>
        <Link to='/'>Favoritos</Link>
      </div>
    </div>
  )
}

export default Header