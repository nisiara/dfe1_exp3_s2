import './Cart.sass'

const Cart = ({games, removeGame}) => {

  const cartTotalPrice = games.reduce((total, game) => game.salePrice + total, 0)

  function handleRemoveGame(game){
    removeGame(game)
  }

  return (
    <aside className="cart">
      <div>
        <h4><span>🛍️</span> Bolsa de compras <small>{games.length}</small></h4>
         
        {games.length === 0 ?
          <div className="cart__message">
            <p>No hay juegos para comprar 😞. <br />Agrega juegos a la bolsa.</p>
          </div> 
          :
          <>
            <div className="cart__items">
              {games.map( game => {
                return(
                  <article key={game.id} className="cart-game">
                    <img className="cart-game__image" src={game.image} alt={game.name} width="64" height="64" />
                    <div className="cart-game__details">
                      <span className="cart-game__name">{game.name}</span>
                      <button onClick={() => handleRemoveGame(game)}className="cart-game__delete">Eliminar</button>
                    </div>
                    <span className="cart-game__price">${game.salePrice.toLocaleString('es-CL') }</span>
                  </article>
                )
              })}
              
            </div>
            <div className="cart__total">
              <h5>Total: ${cartTotalPrice.toLocaleString('es-CL')}</h5>
            </div>
          </>
        }

      </div>
    </aside>
  );
}
 
export default Cart;