import './GameList.sass'
import Game from "../game/Game";

const GameList = () => {

  return ( 
    <>
      <main>
        <h4><span>🕹️</span>Lista de juegos</h4>
        <div className='game-list'>
         
            <Game/>
    
        </div>
      </main>
    </>
    );
}
 
export default GameList;