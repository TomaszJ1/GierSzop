import React from "react"
import PathConstants from "./pathConstants"



const Home = React.lazy(() => import("../pages/Home"))
const About = React.lazy(() => import("../pages/About"))
const Contact = React.lazy(() => import("../pages/Contact"))
const Games = React.lazy(() => import("../pages/Games"))

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.ABOUT, element: <About /> },
    { path: PathConstants.CONTACT, element: <Contact />},
    { path: PathConstants.GAMES, element: <Games />},
]

export default routes
