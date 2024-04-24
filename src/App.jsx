import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import Home from './components/Home.jsx';
import PokemonList from './components/PokemonList.jsx';
import PokemonDetail from './components/PokemonDetail.jsx';
import About from './components/About.jsx';
import "./App.css"

function App() {
  return (
    <PokemonProvider>
      <Router>
        <nav className='navbar'>
          <Link to="/" className='nav-link'>
            Home
          </Link>
          <Link to="/pokemon" className='nav-link'>
            Pokémon List
          </Link>
          <Link to="/about" className='nav-link'>
            About
          </Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </PokemonProvider>
  );
}

export default App;

