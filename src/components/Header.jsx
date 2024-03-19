// Header.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import searchIcon from "../images/szukajka.png";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(PathConstants.SEARCH.replace(":zapytanie", searchQuery));
  };

  return (
    <>
      <header>
        <h1>Witamy w GierSzopie!</h1>
        <form onSubmit={handleSubmit}>
          <div className="szukajka">
            <input
              type="text"
              id="szukajka"
              placeholder="Fraza wyszukiwania..."
              value={searchQuery}
              onChange={handleChange}
            />
            <button type="submit" className="szukanie">
              <img src={searchIcon} alt="Search" />
            </button>
          </div>
        </form>
      </header>
      <nav>
        <Link to={PathConstants.HOME}>Strona główna</Link>
        <Link to={PathConstants.GAMES}>Gry</Link>
        <Link to={PathConstants.ABOUT}>O nas</Link>
        <Link to={PathConstants.CONTACT}>Kontakt</Link>
      </nav>
    </>
  );
};

export default Header;
