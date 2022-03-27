import { useState, useEffect } from "react";
import fetchCharacter from "../utils/index";
import Character from "./Character";
import Pagination from "./Pagination";

const Searcher = () => {
  const [state, setState] = useState("annie");
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
        <h4>Search for a character</h4>
        <input value={state} onChange={(e) => setState(e.target.value)} />
        <button onClick={search}>Search</button>
        <div className="container mt-5">
          {characters ? (
            <>
              <Pagination
                prev={info.prev}
                next={info.next}
                onPrevious={onPrevious}
                onNext={onNext}
              />

              <div className="row">
                {characters.map((char) => (
                  <Character character={char} key={char.id} />
                ))}
              </div>

              <Pagination
                prev={info.prev}
                next={info.next}
                onPrevious={onPrevious}
                onNext={onNext}
              />
            </>
          ) : (
            <h1>Sorry, not characters found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Searcher;
