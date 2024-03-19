import "../styles/Games.css"
import PathConstants from "../routes/pathConstants";
import { Link } from "react-router-dom"

import gameService from "../services/games"
import { useState, useEffect } from "react";

const Games = () => {

  const [games, setGames] = useState([])
useEffect(() => {
  gameService
    .getAll()
    .then(response => {
      setGames(response.data)
    })
}, [])

  return (
    <div>
      <ol className="container">
      {games.map(game =>
        <Link to={PathConstants.GAME}>
        <li className='game-item' key={game.id}>
          <img src={"src/images/" + game.id + ".jpg"}/>
          <p>{game.name}</p>
        </li>
        </Link>
      )}
      </ol>
    </div>
  )
}

export default Games