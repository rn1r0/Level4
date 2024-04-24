import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='container'>
      <h1 className='about-title'>About</h1>
      <div className='about-container'>
        <div className='about-info'>
          <p>Browse and find your next Pokémon, whether you want to catch it for its amazing stats and abilities or flee from it!</p>
          <p>The Pokemons moves shown are considered its best moves gained at Level 10 or higher!</p>
          <p>This is a simple Pokémon app built using React. It allows users to browse a list of Pokémon and view details about each Pokémon.</p>
          <p>The app uses React Router for navigation and Axios for fetching data from the Pokémon API.</p>
          <Link to="/" className='link'>Go back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default About;
