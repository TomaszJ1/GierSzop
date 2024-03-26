import React from "react"
import PathConstants from "./pathConstants"



const Home = React.lazy(() => import("../pages/Home"))
const About = React.lazy(() => import("../pages/About"))
const Contact = React.lazy(() => import("../pages/Contact"))
const Games = React.lazy(() => import("../pages/Games"))
const Account = React.lazy(() => import("../pages/Account"))
const Login = React.lazy(() => import("../pages/Login"))
const Register  = React.lazy(() => import("../pages/Register"))

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.ABOUT, element: <About /> },
    { path: PathConstants.CONTACT, element: <Contact />},
    { path: PathConstants.GAMES, element: <Games />},
    { path: PathConstants.ACCOUNT, element: <Account />},
    { path: PathConstants.LOGIN, element: <Login />},
    { path: PathConstants.REGISTER, element: <Register />},
]

export default routes
