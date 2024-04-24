import { Link } from 'react-router-dom';
import POKEMON from '../assetts/pokemon.png'

function Home() {
  return (
    <div className='container'>
      <img src={POKEMON} alt="pokemon" className='poke-image' />
      <h1 className='title'>Welcome to the Pokémon App</h1>
      <h2 className='home-text'>Click the View Pokemon List to find information about a certain Pokemon</h2>
      <Link to="/pokemon" className='link'>View Pokémon List</Link>
    </div>
  );
}

export default Home;    
