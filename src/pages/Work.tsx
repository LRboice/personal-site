import React from 'react';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import './Work.css';

const Work: React.FC = () => {
  return (
    <div className="page-container work-page">
      <section className="work-header">
        <h1>Projects</h1>
        <div className="section-divider"></div>
        <p>
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