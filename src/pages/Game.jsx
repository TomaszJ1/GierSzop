import "../styles/Games.css"

import gameService from "../services/games"
import { useState, useEffect } from "react";

const Game = () => { 
    const [game, setGame] = useState([])
    useEffect(() => {
      gameService
        .getOne()
        .then(response => {
          setGame(response.data)
        })
    }, [])

    return (
        <div>
        <ol className="container">
        {game.map(game =>
          <li className='game-item' key={game.id}>
            <img src={"src/images/" + game.id + ".jpg"}/>
            <p>{game.name}</p>
          </li>
        )}
        </ol>
      </div>
    )
  }
  
  export default Game