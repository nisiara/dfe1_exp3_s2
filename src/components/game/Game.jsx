import './Game.sass'

const Game = () => {

  return ( 
    <article className="game">
      <img className="game__image" src="" alt="" width="148" height="148"/>
      <div className="game__details">
        <h3 className="game__name"></h3>
        <p className="game__description"></p>
        <span className="game__platform"></span>
        <b className="game__price"></b>
        <b className="game__price game__price--sale"></b>
        <button className="game__action">Agregar al carro</button>
      </div>
    </article>
   );
}
 
export default Game;