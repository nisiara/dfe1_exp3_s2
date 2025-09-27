import './GameList.sass'
import gameData from '../../assets/data/games.js'
import Game from "../game/Game";

const GameList = ({addToCart}) => {

  return ( 
    <>
      <main>
        <h4><span>🕹️</span>Lista de juegos</h4>
        <div className='game-list'>
          {gameData.map( game => (
            <Game key={game.id} 
            game={game}
            addToCart={addToCart}
          />
        ))}
        </div>
      </main>
    </>
    );
}
 
export default GameList;