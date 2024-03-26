import "../styles/Game.css"

import gameService from "../services/games"
import { useState, useEffect } from "react";

import { useLocation } from 'react-router-dom';

const Game = () => {
    const location = useLocation();
    const id = location.state;
    const [game, setGame] = useState([])
    useEffect(() => {
      gameService
        .getOne(id)
        .then(response => {
          setGame(response.data)
        })
    }, [])

    return (
      <div key={game.id}>
        <ol className="container">
          <li className="product-image">
            <img src={"src/images/" + game.id + ".jpg"} alt="Product image"/>
          </li>
          <li className="product-details">
            <h1>{game.name}</h1>
            <p>Author/Producer</p>
            <h2 className="price">$99.99</h2>
            <button className="add-to-cart">Add to Cart</button>
          </li>
        </ol>
        <ol className="product-description">
          <h2>Description</h2>
          <p>{game.description}</p>
        </ol>
      </div>
    )
  }
  
  export default Game