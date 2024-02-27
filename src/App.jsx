import gameService from "./services/games"
import { useState, useEffect } from "react";
import Homunculus from "./components/Homunculus";
import GameList from "./components/GameList";
import "./styles/App.css"

const App = () => {

  // https://semaphoreci.com/blog/routing-layer-react
  const PathConstants = {
    // MAIN: "/",
    GAMES: "/games",
    ABOUT: "/about",
    CONTACT: "/contact",
  }
  const routes = [
    // example { path: PathConstants.TEAM, element: <TeamPage /> },
    { path: PathConstants.GAMES, element: <GameList games={games}/> },
    // ...
  ]

  
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