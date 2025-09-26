const Game = ({...props}) => {
  return ( 
    <article className="game">
      <figure>
        <img src={props.image} alt={props.name} />
      </figure>
      <div className="game__details">
        <h3 className="game__name">{props.name}</h3>
        <p className="game__description">{props.description}</p>
        <span className="game__platform">{props.platform}</span>
        <b className="game__price">{props.price}</b>
        <b className="game__price game__price--sale">{props.price}</b>
      </div>
    </article>
   );
}
 
export default Game;