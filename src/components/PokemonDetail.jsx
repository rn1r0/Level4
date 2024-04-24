import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PokemonDetail = () => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = response.data;
        const extractedDetails = {
          image: data?.sprites?.front_default ?? 'default-image-url',
          id: data?.id ?? 'Unknown',
          name: data?.name ?? 'Unknown',
          type: data?.types[0]?.type?.name?.toUpperCase() ?? 'Unknown',
          stats: extractStats(data?.stats),
          moves: getBestMoves(data?.moves)
        };
        setPokemonDetails(extractedDetails);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const extractStats = (stats) => {
    if (!stats || !Array.isArray(stats)) {
      return [];
    }
    return stats.map((stat) => ({
      name: stat?.stat?.name,
      value: stat?.base_stat,
    }));
  };

  const getBestMoves = (moves) => {
    if (!moves || !Array.isArray(moves)) {
      return [];
    }

    const bestMoves = moves.filter(move => move.version_group_details[0].level_learned_at >= 10); 

    return bestMoves.map(move => ({
      name: move.move.name,
    }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!pokemonDetails) {
    return <div>No Pokémon details found.</div>;
  }

  return (
    <div className='pokemon-details-container'>
      <h2 className='pokemon-name'>{pokemonDetails.name}</h2>
      <p className='pokemon-type'>Type: {pokemonDetails.type}</p>
      <img src={pokemonDetails.image} alt={pokemonDetails.name} className='pokemon-image'/>
      <p>ID: {pokemonDetails.id}</p>
      <div className='pokemon-stats-list'>
      <h3 className='pokemon-stats-title'>Stats:</h3>
      <ul>
        {pokemonDetails.stats.map((stat, index) => (
          <li key={index}>{stat.name}: {stat.value}</li>
        ))}
      </ul>
      <h3 className='pokemon-moves-title'>Moves:</h3>
      <ul>
        {pokemonDetails.moves.map((move, index) => (
          <li key={index} className='pokemon-move-item'>{move.name}</li>
        ))}
      </ul>
      </div>
      <Link to="/pokemon" className='link'>View Pokémon List</Link>
    </div>
  );
};

export default PokemonDetail;
        