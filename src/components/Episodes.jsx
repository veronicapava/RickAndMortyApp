import { useState, useEffect } from "react";
import Episode from "./Episode";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  const baseUrl = `${process.env.REACT_APP_API_URL}/episode`;

  const fetchEpisodes = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setEpisodes(data.results))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchEpisodes(baseUrl);
  }, []);

  return (
    <div>
      <div className="row">
        <h1>Episodes</h1>
        {<Episode episodes={episodes} />}
      </div>
    </div>
  );
};

export default Episodes;
