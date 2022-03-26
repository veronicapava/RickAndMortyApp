import {useEffect} from 'react'

const Card = () => {

  const fetchCharacter = () =>{
    fetch(`${process.env.REACT_APP_API_URL}/character`)
    .then((response) => response.json())  
    .then(data => console.log(data.results))
  }

  useEffect(() => {
    fetchCharacter(`${process.env.REACT_APP_API_URL}/character`)
  }, [])
 
  return (
    <div>
      <h1>Personajes</h1>
        <h5>Este es un personaje</h5>
        {

        }
    </div>
  )
}

export default Card