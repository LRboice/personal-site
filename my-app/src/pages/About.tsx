import React from 'react';

const About: React.FC = () => {
  return (
    <div className="page-container about-page">
      <section className="about-header">
        <h1>About Me</h1>
        <p className="about-intro">
          I'm a software engineer passionate about creating intuitive and impactful digital experiences.
        </p>
      </section>

      <section className="about-content">
        <div className="education" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', marginBottom: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Education</h2>
          <p>Kansas State University (KSU)</p>
          <p>Bachelor of Science in Computer Science</p>
          <p>Aug. 2019 - Dec. 2024, Manhattan, KS</p>
        </div>

        <div className="experience" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', marginBottom: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', lineHeight: '1.6' }}>
          <h2>Experience</h2>
          <h3>Piclist.ai</h3>
          <p>Full Stack Developer</p>
          <p>June 2024 - Present, Remote</p>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
            <li>Designed and built a reusable React component library across 10+ critical application features.</li>
            <li>Spearheaded the eBay API integration with OAuth 2.0.</li>
            <li>Performed unit testing using Jest and PyTest.</li>
            <li>Collaborated closely with a small team to define project requirements and design system architecture.</li>
          </ul>
        </div>

        <div className="personal-accomplishments" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', marginBottom: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2> Achievements </h2>
          <p>Eagle Scout Earned 2016</p>
        </div>

        <div className="contact-section" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', marginBottom: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Get in Touch</h2>
          <div className="contact-links">
            <a href="https://github.com/lrboice" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/lrboice" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:LucasRBoice@gmail.com">
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 