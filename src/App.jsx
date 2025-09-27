import './App.scss'
import { useState } from 'react'
import Cart from './components/cart/Cart'
import GameList from './components/game-list/GameList'
import Header from './components/header/Header'

const App = () => {

  const [cartItems, setCartItems] = useState([])

  function addToCart(game) {
    
    const existingItem = cartItems.find(cartItem => cartItem.id === game.id)
    if (existingItem) return;
    setCartItems([...cartItems, game])
    
  }

  function removeFromCart(gameId){
    setCartItems(cartItems.filter(item => item.id !== gameId))
  }
 
  return (
    <div className='app-container'>
      <Header/>
      <GameList addToCart={addToCart}/>
      <Cart 
        cartItems={cartItems} 
        removeFromCart={removeFromCart}  
      />
    </div>
  )
}

export default App
