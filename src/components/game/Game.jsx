import './Game.sass'

const Game = ({ game, addToCart }) => {

  const {id, image, name, description, platform, price} = game

  const handleAddToCart = () => {
    const addedGame = {
      id,
      image,
      name,
      platform,
      price
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
        <b className="game__price">{price.toLocaleString('es-CL')}</b>
        <b className="game__price game__price--sale">{price.toLocaleString('es-CL')}</b>
        <button onClick={handleAddToCart} className="game__action">Agregar al carro</button>
      </div>
    </article>
   );
}
 
export default Game;