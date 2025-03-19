import React from 'react';
import emailjs from 'emailjs-com';

const About: React.FC = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.currentTarget.reset(); // Reset the form after submission
  };

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
          <h2>Contact Me</h2>
          <form className="contact-form" onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px', margin: '0 auto' }}>
            <input type="text" name="name" placeholder="Your Name" required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#fff', color: '#000' }} />
            <input type="email" name="email" placeholder="Your Email" required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#fff', color: '#000' }} />
            <textarea name="message" placeholder="Your Message" required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '100px', backgroundColor: '#fff', color: '#000' }}></textarea>
            <button type="submit" style={{ padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#007BFF', color: '#fff', cursor: 'pointer' }}>Send Message</button>
          </form>
          <div className="contact-links" style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
            <a href="https://github.com/lrboice" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', borderRadius: '4px', border: '1px solid #007BFF', backgroundColor: '#fff', color: '#007BFF', textDecoration: 'none', cursor: 'pointer' }}>GitHub</a>
            <a href="https://linkedin.com/in/lrboice" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', borderRadius: '4px', border: '1px solid #007BFF', backgroundColor: '#fff', color: '#007BFF', textDecoration: 'none', cursor: 'pointer' }}>LinkedIn</a>
            <a href="mailto:LucasRBoice@gmail.com" style={{ padding: '10px 20px', borderRadius: '4px', border: '1px solid #007BFF', backgroundColor: '#fff', color: '#007BFF', textDecoration: 'none', cursor: 'pointer' }}>Email</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 