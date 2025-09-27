import { useState } from 'react'
import './App.scss'
import Cart from './components/cart/Cart'
import GameList from './components/game-list/GameList'
import Header from './components/header/Header'

const App = () => {

  const [cartItem, setCartItem] = useState([]);

  return (
    <div className='app-container'>
      <Header/>
      <GameList/>
      <Cart/>
    </div>
  )
}

export default App
