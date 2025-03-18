import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav className="nav">
            <Link to="/" className="nav-name">Lucas</Link>
            <div className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/work" className="nav-link">Work</Link>
              <Link to="/about" className="nav-link">About</Link>
            </div>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
