import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonContext = createContext();

function PokemonProvider({ children }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemonList() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemonList(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    }  

    fetchPokemonList();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemonList, isLoading }}>
      {children}
    </PokemonContext.Provider>
  );
}

export { PokemonProvider };
