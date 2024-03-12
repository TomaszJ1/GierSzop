

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import routes from "./routes"



import "./styles/App.css"
import Layout from "./components/Layout.jsx";

const App = () => {


  // https://semaphoreci.com/blog/routing-layer-react
  //--------------------------------------------------
  // npm install react-router-dom
  //--------------------------------------------------
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: routes,
    },
  ])


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
