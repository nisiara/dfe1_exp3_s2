import './GameList.sass'
import { useEffect, useState} from 'react'
import Game from '../game/Game';

//GameList recibe 2 props. 1. La función que pasa al componente Game
//con el objetivo de recuperar el objeto que se quiere agregar al carro
//2. La lista de juegos que está en el carro, para verificar si el juego
//a comprar ya existe en el carro.
const GameList = ({addGameToCart, cartGames}) => {

  //Agregamos el hook useState() para guardar el estado de la lista de juegos
  //que cargaremos a través del hook useEffect()
  const[games, setGames] = useState([]);

  //Usamos useEffect porque para interactuar co el estado necesitamos realizar
  //un 'efecto secundario' que no es renderizar elementos sino, en este caso, realizar una carga asíncrona
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
              //A través del metodo .find verificamos si hay coincidencias con la lista de juegos del carro y el juego que va al carrito 
              const isInCart = cartGames.find( cartGame => cartGame.id === game.id)
              return <Game key={game.id} gameObj={game} addToCart={addGameToCart} isInCart={isInCart}/>
            })
          }
        </div>
      </main>
    </>
    );
}
 
export default GameList;