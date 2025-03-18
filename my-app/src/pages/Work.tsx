import React, { useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  year: string;
  blogUrl: string;
}

const projects: Project[] = [
  {
    title: "Childcare App",
    description: "Mobile application to assist in day-to-day child care for new parents. Utilized React Native and Firebase for seamless user experience.",
    technologies: ["React Native", "Firebase"],
    imageUrl: "/childcare.jpg",
    year: "2023",
    blogUrl: "https://example.com/childcare-app"
  },
  {
    title: "Winforms/.NET Library Database Search System",
    description: "Dashboard for quick inventory queries and submissions with a minimalist UI. Optimized SQL queries for enhanced search functionality.",
    technologies: [".NET", "SQL"],
    imageUrl: "/library.jpg",
    year: "2022",
    blogUrl: "https://example.com/library-database-search-system"
  },
  {
    title: "Winforms/.NET PoS System",
    description: "Point-of-Sale System for a fictional restaurant, designed for fast-paced environments with an accessible UI.",
    technologies: [".NET", "C#"],
    imageUrl: "/pos.jpg",
    year: "2022",
    blogUrl: "https://example.com/pos-system"
  }
];

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (index: number) => {
    setSelectedProject(projects[index]);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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
          <div key={index} className="project-card" onClick={() => openModal(index)} style={{ cursor: 'pointer', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', marginBottom: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src={project.imageUrl} alt={project.title} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={(e) => { e.stopPropagation(); openModal(index); }} style={{ padding: '8px 16px', backgroundColor: '#0077b5', color: '#fff', borderRadius: '4px', textDecoration: 'none', marginTop: '8px', display: 'inline-block' }}>
              Read More
            </button>
          </div>
        ))}
      </section>

      {selectedProject && (
        <div className="modal" onClick={closeModal} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ background: 'white', padding: '20px', borderRadius: '8px', maxWidth: '500px', width: '90%' }}>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <div>
              {selectedProject.technologies.map((tech, index) => (
                <span key={index} className="tech-tag" style={{ backgroundColor: '#f0f0f0', borderRadius: '4px', padding: '4px 8px', margin: '4px', display: 'inline-block' }}>{tech}</span>
              ))}
            </div> 
          </div>
        </div>
      )}
    </div>
  );
};

export default Work; 