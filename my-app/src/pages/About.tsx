import React from 'react';
import emailjs from '@emailjs/browser';
import './About.css';

const About: React.FC = () => {
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      formData.append('time', new Date().toLocaleString());

      // Log the captured data
      console.log('Captured Data:', {
        from_name: formData.get('from_name'),
        reply_to: formData.get('reply_to'),
        message: formData.get('message'),
        time: formData.get('time'),
      });

      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.get('from_name'),
          reply_to: formData.get('reply_to'),
          message: formData.get('message'),
          time: formData.get('time'),
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''
      );
      console.log(result.text);
    } catch (error: any) {
      console.log(error.text);
    }

    e.currentTarget.reset(); // Reset the form after submission
  };

  return (
    <div className="page-container about-page">
      <section className="about-header">
        <h1>About Me</h1>
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
          I'm a software engineer passionate about creating elegant solutions to complex problems.
          My journey in tech has been driven by curiosity and a desire to build meaningful applications.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card education-card">
          <div className="education-content">
            <h2>Education</h2>
            <p>Kansas State University (KSU)</p>
            <p>Bachelor of Science in Computer Science</p>
            <p>Aug. 2019 - Dec. 2024, Manhattan, KS</p>
          </div>
          <img 
            src="/ksuLogo.png" 
            alt="Kansas State University Logo" 
            className="education-logo"
          />
        </div>

        <div className="about-card experience-card">
          <div className="experience-content">
            <h2>Experience</h2>
            <h3>Fullstack Software Engineer - Piclist.ai</h3>
            <p>May 2023 - Present</p>
            <ul>
              <li>Developed and maintained web applications using React, TypeScript, and Node.js</li>
              <li>Implemented new features and improved existing functionality</li>
              <li>Collaborated with team members on various projects</li>
            </ul>
          </div>
          <img 
            src="/adaptive-icon.png" 
            alt="Piclist.ai Logo" 
            className="experience-logo"
          />
        </div>

        <div className="about-card achievements-card">
          <div className="achievements-content">
            <h2>Achievements</h2>
            <p>Eagle Scout Earned 2016</p>
          </div>
          <img 
            src="/eagle.png" 
            alt="Eagle Scout Logo" 
            className="achievements-logo"
          />
        </div>

        <div className="about-card">
          <div className="contact-header">
            <h2>Contact Me</h2>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/lrboice" target="_blank" rel="noopener noreferrer" className="social-link github">
              GitHub
            </a>
            <a href="https://linkedin.com/in/lrboice" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              LinkedIn
            </a>
            <a href="mailto:LucasRBoice@gmail.com" className="social-link email">
              Email
            </a>
          </div>

          <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Your Name" required style={{ color: '#333' }} />
            <input type="email" name="reply_to" placeholder="Your Email" required style={{ color: '#333' }} />
            <textarea name="message" placeholder="Your Message" required style={{ color: '#333' }}></textarea>
            <button type="submit">Send Me A Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About; 