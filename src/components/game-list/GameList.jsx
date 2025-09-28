import './GameList.sass'
import Game from '../game/Game';
import games from '../../assets/data/games.js'


//GameList , solo recibe un prop, la cual es una función que pasa al componente Game
//con el objetivo de recuperar el objeto que se quiere agregar al carro
const GameList = ({addGameToCart}) => {

  //Retorna el jsx que se encarga de renderizar la lista de juegos.
  return ( 
    <>
      <main>
        <h4><span>🕹️</span>Lista de juegos</h4>
        <div className='game-list'>
          {
            games.map( game => {
              return <Game key={game.id} gameObj={game} addToCart={addGameToCart}/>
            })
          }
        </div>
      </main>
    </>
    );
}
 
export default GameList;