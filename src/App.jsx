import gameService from "./services/games"
import { useState, useEffect } from "react";
import Games from "./pages/Games";

import PathConstants from "./routes/pathConstants"
import { RouterProvider,
} from "react-router-dom"


import "./styles/App.css"

const App = () => {

  const Home = React.lazy(() => import("./pages/Home"))
  const About = React.lazy(() => import("./pages/About"))
  const Games = React.lazy(() => import("./pages/Games"))
  const Contact= React.lazy(() => import("./pages/Contact"))



  // https://semaphoreci.com/blog/routing-layer-react
  //--------------------------------------------------
  // npm install react-router-dom
  //--------------------------------------------------
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: [
        { path: PathConstants.HOME, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/games", element: <Games /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ])

  

  const [games, setGames] = useState([])

    useEffect(() => {
      gameService
        .getAll()
        .then(response => {
          setGames(response.data)
        })
  }, [])


  return (
    <RouterProvider router={router}/>
  )
}

export default App
