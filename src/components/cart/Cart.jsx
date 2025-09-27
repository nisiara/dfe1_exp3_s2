import './Cart.sass'

const Cart = ({ cartItems, removeFromCart }) => {
  
  function getTotalPrice(){
    return cartItems.reduce((accu, item) => accu + item.price, 0)
  }
  function getCartQuantity(){
    return cartItems.length;
  }

  return (
    <aside className="cart">
      <div>
        <h4><span>🛍️</span> Bolsa de compras {getCartQuantity() > 0 && <small>{getCartQuantity()}</small>}</h4>
        
        {cartItems.length === 0 ? 
          <div className="cart__message">
            <p>No hay juegos para comprar 😞. <br />Agrega juegos a la bolsa.</p>
          </div> 
          : 
          <>
            <div className="cart__items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-game">
                  <img className="cart-game__image" src={item.image} alt={item.name} width="64" height="64" />
                  <div className="cart-game__details">
                    <span className="cart-game__name">{item.name}</span>
                    <span className="cart-game__price">${item.price}</span>
                    <button 
                      className="cart-game__delete"
                      onClick={() => removeFromCart(item.id)}
                    >
                    Eliminar
                  </button>
                  </div>
                  
                  
                </div>
              ))}
            </div>
            <div className="cart__total">
              <h5>Total: ${getTotalPrice().toLocaleString('es-CL')}</h5>
            </div>
          </>
        }
      </div>
    </aside>
  );
}
 
export default Cart;