import React from 'react'; 
import './Home.css';
import '../components/Projects.css';  // Import Projects.css for consistent styling 

const Home: React.FC = () => {
  return (
    <div className="page-container home-page">
      <section className="hero-section">
        <div className="portrait-container">
          <img 
            src={`${import.meta.env.BASE_URL}portrait.jpg`}
            alt="Lucas Boice"
            className="portrait-image"
          />
        </div>
        <h1>Howdy, I'm Lucas!</h1>
        <p className="hero-text">
          Full Stack Developer at piclist.ai, crafting innovative solutions to help businesses scale and succeed.
        </p>

        <div className="hero-buttons">
          <a href="https://github.com/lrboice" target="_blank" rel="noopener noreferrer" className="button github">
            GitHub
          </a>
          <a href="https://linkedin.com/in/lrboice" target="_blank" rel="noopener noreferrer" className="button linkedin">
            LinkedIn
          </a>
        </div> 

        
        <h1>Latest Work</h1>
        <div className="section-divider"></div>
        <div className="project-card">
          <div className="project-info">
            <div className="project-type">Current Role</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
              <img 
                src={`${import.meta.env.BASE_URL}adaptive-icon.png`}
                alt="Piclist.ai Adaptive Icon" 
                style={{ width: '30px', height: '30px', objectFit: 'contain' }} 
              />
              <h3 style={{ margin: 0 }}>Piclist.ai</h3>
            </div>
            <p className="project-role">Full Stack Developer</p>
            <p className="project-duration">June 2024 - Present, Remote</p>
            <div className="project-tech">
              <span className="tech-tag">React</span> 
              <span className="tech-tag">Tailwind CSS</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">FastAPI</span> 
              <span className="tech-tag">OAuth 2.0</span>
              <span className="tech-tag">Redis</span> 
              <span className="tech-tag">Remix</span>
            </div>
            <ul className="project-achievements">
              <li>Designed and built a reusable React component library across 10+ critical application features.</li>
              <li>Spearheaded the eBay API integration with OAuth 2.0.</li>
              <li>Performed unit testing using Jest and PyTest.</li>
              <li>Collaborated closely with a small team to define project requirements and design system architecture.</li>
            </ul>
            <div className="project-buttons">
              <a 
                href="https://piclist.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-btn"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 