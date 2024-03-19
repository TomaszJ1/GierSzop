// Search.jsx
import "../styles/Games.css"

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import gameService from "../services/games";

const Search = () => {
  const { zapytanie } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [games, setGames] = useState([]);

  useEffect(() => { 
    setSearchQuery(zapytanie);
    gameService.getAll().then((response) => {
      const filteredGames = response.data.filter((game) =>
        game.name.toLowerCase().includes(zapytanie.toLowerCase())
      );
      setGames(filteredGames);
    });
  }, [zapytanie]);

  return (
    <div>
      <ol className="container">
      {games.map(game =>
        <li className='game-item' key={game.id}>
          <img src={"../src/images/" + game.id + ".jpg"}/>
          <p>{game.name}</p>
        </li>
      )}
      </ol>
    </div>
  )
};

export default Search;
