import { useEffect, useState } from "react";
import Character from "./Character";
import Pagination from "./Pagination";

const Card = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const baseUrl = `${process.env.REACT_APP_API_URL}/character`;

  const fetchCharacter = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      });
  };

  const onPrevious = () => {
    fetchCharacter(info.prev);
  };
  const onNext = () => {
    fetchCharacter(info.next);
  };

  useEffect(() => {
    fetchCharacter(baseUrl);
  }, []);

  return (
    <div className="container my-5">
      <h1>Personajes</h1>
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Character characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </div>
  );
};

export default Card;
