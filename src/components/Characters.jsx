import { useEffect, useState } from "react";
import Character from "./Character";
import Pagination from "./Pagination";
import fetchCharacter from "../utils/index";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const baseUrl = `${process.env.REACT_APP_API_URL}/`;
  const endpoint = `character`;

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

  useEffect(async () => {
    let data = await fetchCharacter(baseUrl + endpoint);
    setCharacters(data.results);
    setInfo(data.info);
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-uppercase text-center">Characters</h1>
      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />

        <div className="row">
          {characters.map((char) => (
            <Character character={char} key={char.id} />
          ))}
        </div>

        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </div>
  );
};

export default Characters;
