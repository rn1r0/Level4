import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

function PokemonList() {
  const { pokemonList, isLoading } = useContext(PokemonContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <h2>Pokémon List</h2>
      <ul className='pokemon-list'>
        {pokemonList.map((pokemon, index) => (
          <li key={index} className='pokemon-item'>
            <Link to={`/pokemon/${index + 1}`} className='pokemon-link'>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/" className='link'>Go back to Home</Link>
    </div>
  );
}

export default PokemonList;
