const GameList = ({games}) => {
    console.log(games)

    return (
    <ol>
    {games.map(game =>
      <li>{game.name}</li>
    )}
    </ol>
  )
}

export default GameList