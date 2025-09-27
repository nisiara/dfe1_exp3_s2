import './Cart.sass'

const Cart = () => {
  
  return (
    <aside className="cart">
      <div>
        <h4><span>🛍️</span> Bolsa de compras <small>0</small></h4>
        
      
          <div className="cart__message">
            <p>No hay juegos para comprar 😞. <br />Agrega juegos a la bolsa.</p>
          </div> 
         
          <>
            <div className="cart__items">
             
                <div className="cart-game">
                  <img className="cart-game__image" width="64" height="64" />
                  <div className="cart-game__details">
                    <span className="cart-game__name"></span>
                    <span className="cart-game__price"></span>
                    <button 
                      className="cart-game__delete">
                    Eliminar
                  </button>
                  </div>
                  
                  
                </div>
              
            </div>
            <div className="cart__total">
              <h5>Total: </h5>
            </div>
          </>
        
      </div>
    </aside>
  );
}
 
export default Cart;