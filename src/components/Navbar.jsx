import {useState} from 'react'

const Navbar = () => {
  const [state, setState] = useState()
  return (
    <div className="navbar-brand">
      <div className="container">
        <h4>Ingresa el personaje a buscar</h4>
        <input value={state} onChange={e => setState(e.target.value)}/>
      </div>
    </div>
  )
}

export default Navbar