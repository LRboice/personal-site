import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Work from './pages/Work.tsx';
import About from './pages/About.tsx';
import './App.css';
import resume from './assets/LucasBoice-Resume.pdf';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav className="nav">
            <h1 className="nav-name">Lucas Boice</h1>
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

        <footer className="footer">
          <div className="footer-links">
            <a href="https://github.com/lrboice" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:LucasRBoice@gmail.com">Email</a>
            <a href="https://linkedin.com/in/lrboice" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={resume} download>Resume</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
