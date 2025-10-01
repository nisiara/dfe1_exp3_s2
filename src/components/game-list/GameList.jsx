import './GameList.sass'
import { useEffect, useState} from 'react'
import Game from '../game/Game';
// import games from '../../assets/data/games.js'


//GameList , solo recibe un prop, la cual es una función que pasa al componente Game
//con el objetivo de recuperar el objeto que se quiere agregar al carro
const GameList = ({addGameToCart}) => {

  const[games, setGames] = useState([]);

  useEffect(() => {
    fetch('/data/games.json')  
      .then(response => {
        if (!response.ok) {
          throw new Error('Falló la carga de la API');
        }
        return response.json();
      })
      .then(games => {
        console.log('Juegos cargados:', games);
        setGames(games);
      })
      .catch(error => {
        console.error('Error', error.message);
      });
  }, [])


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