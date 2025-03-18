import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  year: string;
}

const projects: Project[] = [
 
  {
    title: "Childcare App",
    description: "Mobile application to assist in day-to-day child care for new parents. Utilized React Native and Firebase for seamless user experience.",
    technologies: ["React Native", "Firebase"],
    imageUrl: "/childcare.jpg",
    year: "2023"
  },
  {
    title: "Winforms/.NET Library Database Search System",
    description: "Dashboard for quick inventory queries and submissions with a minimalist UI. Optimized SQL queries for enhanced search functionality.",
    technologies: [".NET", "SQL"],
    imageUrl: "/library.jpg",
    year: "2022"
  },
  {
    title: "Winforms/.NET PoS System",
    description: "Point-of-Sale System for a fictional restaurant, designed for fast-paced environments with an accessible UI.",
    technologies: [".NET", "C#"],
    imageUrl: "/pos.jpg",
    year: "2022"
  }
];

const Work: React.FC = () => {
  return (
    <div className="page-container work-page">
      <section className="work-header">
        <h1>Projects</h1>
        <p className="work-intro">
          A selection of projects I've worked on. Each project represents a unique challenge
          and solution in software development.
        </p>
      </section>

      <section className="work-grid">
        {projects.map((project, index) => (
          <div key={index} className="work-item" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', marginBottom: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src={project.imageUrl} alt={project.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '8px' }} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Work; 