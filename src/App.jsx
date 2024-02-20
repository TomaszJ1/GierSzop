import gameService from "./services/games"
import { useState, useEffect } from "react";
import Homunculus from "./components/Homunculus";
import GameList from "./components/GameList";
import "./styles/App.css"

const App = () => {
  
  const [games, setGames] = useState([])

  useEffect(() => {
    gameService
      .getAll()
      .then(response => {
        setGames(response.data)
      })
    
  }, [])


  return (
    <div className="app-container">
        <GameList games={games}/>
    </div>
  )
}

export default App