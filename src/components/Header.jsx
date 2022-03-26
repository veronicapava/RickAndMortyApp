import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Rick and Morty App</h1>
      <Link to='/'>Personajes</Link>
      <br></br>
      <Link to='/'>Episodios</Link>
      <br></br>
      <Link to='/'>Favoritos</Link>
    </div>
  )
}

export default Header