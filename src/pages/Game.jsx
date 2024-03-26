import "../styles/Game.css"

import gameService from "../services/games"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <div key={game.id}>
        <ol className="container">
          <li className="product-image">
            <img src={"src/images/" + game.id + ".jpg"}/>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor nulla vel lectus bibendum, quis condimentum massa varius. Duis dictum posuere risus a finibus. Fusce ac tortor ut velit scelerisque posuere. Donec eget mauris tincidunt, ultricies arcu sit amet, pretium sem. Sed auctor suscipit convallis. Integer feugiat ante eu dolor vehicula, nec laoreet leo efficitur. Sed sed nisi id mi cursus fringilla. Nunc auctor justo vel eros gravida, vel tincidunt lorem fringilla. Maecenas nec ipsum id elit efficitur pharetra.</p>
        </ol>
      </div>
    )
  }
  
  export default Game