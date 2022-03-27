import { useState, useEffect } from "react";
import fetchCharacter from "../utils/index";
import Character from "./Character";
import Pagination from "./Pagination";

const Searcher = () => {
  const [state, setState] = useState("");
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  let baseUrl = `${process.env.REACT_APP_API_URL}/`;
  const endpoint = `character?name=${state}`;

  const search = async () => {
    let data = await fetchCharacter(baseUrl + endpoint);
    setCharacters(data.results);
    setInfo(data.info);
  };
  const onPrevious = async () => {
    let data = await fetchCharacter(info.prev);
    setCharacters(data.results);
    setInfo(data.info);
  };
  const onNext = async () => {
    let data = await fetchCharacter(info.next);
    setCharacters(data.results);
    setInfo(data.info);
  };

  return (
    <div className="navbar-brand my-5">
      <div className="container mt-2">
        <h4 className="form-label text-uppercase text-center mb-5">Search for a character</h4>

        <input className="form-control mb-3" value={state} onChange={(e) => setState(e.target.value)} />
        <br />
        <div className="d-grid gap-2">
          <button className="btn btn-lg btn-secondary" onClick={search}>
            Search
          </button>
        </div>

        <div className="container mt-5">
          {characters ? (
            <>
              <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />

              <div className="row">
                {characters.map((char) => (
                  <Character character={char} key={char.id} />
                ))}
              </div>

              <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
            </>
          ) : (
            <h1 className="alert alert-dismissible alert-warning">Sorry, not characters found</h1>
          )}
          {characters.length == 0 && (
            <img className="rounded mx-auto d-block" src={process.env.PUBLIC_URL + "img/rickmorty.jpg"} alt="logo" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Searcher;
