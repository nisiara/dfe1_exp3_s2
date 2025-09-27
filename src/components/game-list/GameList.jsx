import './GameList.sass'
import Game from '../game/Game';
import games from '../../assets/data/games.js'

const GameList = () => {

  return ( 
    <>
      <main>
        <h4><span>🕹️</span>Lista de juegos</h4>
        <div className='game-list'>
          {
            games.map( game => {
              return <Game key={game.id} gameObj={game}/>
            })
          }
            
    
        </div>
      </main>
    </>
    );
}
 
export default GameList;