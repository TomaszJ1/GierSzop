import image from "../images/0.jpg"
import "../styles/Games.css"

const Games = ({games}) => {
  return (
    <div>
      <ol className="container">
      {games.map(game =>
        <li className='game-item' key={game.id}>
          <img src={image}/>
          <p>{game.name}</p>
        </li>
      )}
      </ol>
    </div>
  )
}

export default Games