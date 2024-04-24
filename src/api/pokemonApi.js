import axios from 'axios';

export const URL = "https://pokeapi.co/api/v2/pokemon";
export const GET_POKEMONS = `${URL}?limit=150/`;

export const getPokemons = async (apiURL) => {
  try {
    const response = await axios.get(apiURL);
    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch Pokémon data');
  }
};
