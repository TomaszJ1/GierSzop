import "../styles/Games.css"

import gameService from "../services/games"
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";

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
        <Link to={{pathname: PathConstants.GAME, state: game.id}}>
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