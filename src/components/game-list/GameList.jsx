import gameData from '../../assets/data/games.js'
import Game from "../game/Game";

const GameList = () => {

  return ( 
    <section>
      {gameData.map( game => <Game key={game.id} {...game}/>)}
    </section>
   );
}
 
export default GameList;