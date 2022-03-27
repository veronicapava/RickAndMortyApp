import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar text-uppercase navbar-expand-lg navbar-light bg-primary ">
      <div className="container">
        <h1 className="navbar-brand">I'm Mr. Meeseeks, look at me!</h1>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item ">
              <Link className="nav-link active " to="/">
                Characters
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/episodes">
                Episodes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/searcher">
                Searcher
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/favorites">
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
