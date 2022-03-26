import {useEffect, useState} from 'react'
import Character from './Character'

const Card = () => {

  const [characters, setCharacters] = useState([])

  const fetchCharacter = () =>{
    fetch(`${process.env.REACT_APP_API_URL}/character`)
    .then((response) => response.json())  
    .then(data => setCharacters(data.results))
  }

  useEffect(() => {
    fetchCharacter(`${process.env.REACT_APP_API_URL}/character`)
  }, [])
 
  return (
    <div className="container">
      <h1>Personajes</h1>
        <div className="container">
          <Character characters={characters}/>
        </div>
    </div>
  )
}

export default Card