import "../styles/Games.css"

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
        <li className='game-item' key={game.id}>
          <img src={"src/images/" + game.id + ".jpg"}/>
          <p>{game.name}</p>
        </li>
      )}
      </ol>
    </div>
  )
}

export default Games