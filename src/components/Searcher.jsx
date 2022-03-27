import { useState, useEffect } from "react";
import fetchCharacter from "../utils/index";

const Searcher = () => {
  const [state, setState] = useState("");
  console.log(state);

  let baseUrl = `${process.env.REACT_APP_API_URL}/`;
  const endpoint = `character?name=${state}`;

  const search = async () => {
    console.log(await fetchCharacter(baseUrl + endpoint));
  };

  return (
    <div className="navbar-brand my-5">
      <div className="container">
        <h4>Search for a character</h4>
        <input value={state} onChange={(e) => setState(e.target.value)} />
        <button onClick={search}>Search</button>
      </div>
    </div>
  );
};

export default Searcher;
