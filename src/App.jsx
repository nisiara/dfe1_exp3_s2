import './App.scss'
import Cart from './components/cart/Cart'
import GameList from './components/game-list/GameList'
import Header from './components/header/Header'

const App = () => {

  
 
  return (
    <div className='app-container'>
      <Header/>
      <GameList/>
      <Cart/>
    </div>
  )
}

export default App
