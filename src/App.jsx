import { useState } from 'react'
import './App.sass'
import Cart from './components/cart/Cart'
import GameList from './components/game-list/GameList'
import Header from './components/header/Header'

const App = () => {

  const [cartGames, setCartGames] = useState([]);

  function addGameToCart(addedGame){
    const isGameInCart = cartGames.find(game => game.id === addedGame.id )
    if(isGameInCart) return
    setCartGames( prev => [...prev, addedGame])
  }

  function removeGameFromCart(removedGame){
    const updatedCart = cartGames.filter( game => game.id !== removedGame.id )
    setCartGames(updatedCart)
  }

  return (
    <div className='app-container'>
      <Header/>
      <GameList addGameToCart={addGameToCart}/>
      <Cart games={cartGames} removeGame={removeGameFromCart}/>
    </div>
  )
}

export default App
