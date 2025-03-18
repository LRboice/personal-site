import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h1>Welcome! I'm Lucas</h1>
        <p className="tagline">
          A passionate developer crafting digital experiences
        </p>
        <div className="about-description">
          <p>
            I specialize in building modern web applications with cutting-edge technologies.
            With a keen eye for detail and a love for clean code, I transform ideas into
            reality through elegant solutions.
          </p>
        </div>
        <div className="tech-stack">
          <h3>Technologies I Love</h3>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Modern CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 