import React from 'react';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Work: React.FC = () => {
  return (
    <div className="page-container work-page">
      <section className="work-header">
        <h1 style={{ textAlign: 'center' }}>Projects</h1>
        <div style={{ 
          width: '600px', 
          height: '4px', 
          backgroundColor: '#0077b5', 
          margin: '0 auto 2rem auto', 
          borderRadius: '2px' 
        }}></div>
        <p style={{ 
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto',
          color: 'var(--secondary-color)'
        }}>
          A selection of projects I've worked on. Each project represents a unique challenge
          and solution in software development.
        </p>
      </section>

      <Projects />

      <section className="skills-section">
        <Skills />
      </section>
    </div>
  );
};

export default Work; 