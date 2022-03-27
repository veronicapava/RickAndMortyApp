import { useState } from "react";

const Searcher = () => {
  const [state, setState] = useState();
  return (
    <div className="navbar-brand my-5">
      <div className="container">
        <h4>Search for a character</h4>
        <input value={state} onChange={(e) => setState(e.target.value)} />
      </div>
    </div>
  );
};

export default Searcher;