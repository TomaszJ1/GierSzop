import gameService from "./services/games"
import { useState, useEffect } from "react";
import Homunculus from "./components/Homunculus";

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
    <>
    <Homunculus/>
    </>
  )
}

export default App