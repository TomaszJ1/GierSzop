import gameService from "./services/games"
import { useState, useEffect } from "react";
import Homunculus from "./components/Homunculus";
import GameList from "./components/GameList";

const App = () => {
  
  const [games, setGames] = useState([])

  useEffect(() => {
    gameService
      .getAll()
      .then(response => {
        setGames(response.data)
      })
    
  }, [])

  console.log(games)

  return (
    <>
    <h1>Gierszop</h1>
    </>
  )
}

export default App