import './Game.sass'

const Game = ({gameObj, addToCart}) => {
  const {id, image, name, description, platform, price, offerPrice} = gameObj

  function handleAddToCart(){

    const addedGame = {
      id,
      image,
      name,
      platform,
      salePrice: offerPrice || price,
    }

    addToCart(addedGame)

  }

  return ( 
    <article className="game">
      <img className="game__image" src={image} alt={name} width="148" height="148"/>
      <div className="game__details">
        <h3 className="game__name">{name}</h3>
        <p className="game__description">{description}</p>
        <span className="game__platform">{platform}</span>
        <div className='game__prices-container'>
          <b className={offerPrice ? 'game__price game__price--outdated' : 'game__price'}>${price.toLocaleString('es-CL')}</b>
          {offerPrice && <b className="game__price">${offerPrice.toLocaleString('es-CL')}</b>}
        </div>
        <button onClick={handleAddToCart} className="game__action">Agregar a la bolsa</button>
      </div>
    </article>
   );
}
 
export default Game;