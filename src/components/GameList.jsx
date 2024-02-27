import React from 'react';
import "../styles/GameList.css";

const GameList = ({ games }) => {
  const sortedGames = games.slice().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <ol className="container">
        {sortedGames.map(game =>
          <a href={`/games/${game.id}`}><li className='game-item' key={game.id}>
            <img src={"../src/images/" + game.id + ".jpg"} alt={game.name} /> {}
            {/* Adding the anchor tag here */}
              <p>{game.name}</p>
          </li></a>
        )}
      </ol>
    </div>
  );
};

export default GameList;
