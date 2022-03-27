import { useState, useEffect } from "react";
import Episode from "./Episode";
import Pagination from "./Pagination";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [info, setInfo] = useState({});

  const baseUrl = `${process.env.REACT_APP_API_URL}/episode`;

  const fetchEpisodes = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.error(error));
  };

  const onPrevious = () => {
    fetchEpisodes(info.prev);
  };
  const onNext = () => {
    fetchEpisodes(info.next);
  };

  useEffect(() => {
    fetchEpisodes(baseUrl);
  }, []);

  return (
    <div>
      <div className="row">
        <h1>Episodes</h1>
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Episode episodes={episodes} />
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

export default Episodes;
