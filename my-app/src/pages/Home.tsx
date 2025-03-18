import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="page-container home-page">
      <section className="hero-section">
        <h1>Hi, I'm Lucas.</h1>
        <p className="hero-text">
          I'm a software engineer focused on building exceptional digital experiences.
          Currently, I'm working on creating accessible, human-centered products.
        </p>
      

      <div className="hero-buttons" style={{ marginTop: '16px', display: 'flex', gap: '16px' }}>
        <a href="https://github.com/lrboice" target="_blank" rel="noopener noreferrer" className="button github">
          GitHub
        </a>
        <a href="https://linkedin.com/in/lrboice" target="_blank" rel="noopener noreferrer" className="button linkedin">
          LinkedIn
        </a>
      </div>
      </section>
      <section className="featured-work">
        <h2>Latest Work</h2>
        <div className="work-preview">
          <div className="work-item" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', marginBottom: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <a href="https://piclist.ai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>Piclist.ai</h3>
            </a>
            <p>Full Stack Developer</p>
            <p>June 2024 - Present, Remote</p>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
              <li>Designed and built a reusable React component library across 10+ critical application features.</li>
              <li>Spearheaded the eBay API integration with OAuth 2.0.</li>
              <li>Performed unit testing using Jest and PyTest.</li>
              <li>Collaborated closely with a small team to define project requirements and design system architecture.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 