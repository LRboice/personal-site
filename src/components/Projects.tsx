import React, { useState } from 'react';
import './Projects.css';
 

interface Project {
  title: string;
  projectType: string; 
  description: string;
  technologies: string[];
  imageUrl: string;
  year: string; 
  githubUrl?: string;  // Optional GitHub URL
}

const projectsData: Project[] = [
  {
    title: "Childcare App",
    projectType: "KSU", 
    description: "Mobile application to assist in day-to-day child care for new parents. Utilized React Native and Firebase for seamless user experience.",
    technologies: ["React Native","JavaScript", "Expo", "Firebase"],
    imageUrl: `${import.meta.env.BASE_URL}GrapeVyne.png`, 
    year: "2024", 
    githubUrl: "https://github.com/ksu-cs-projects-2024-2025/fall-2024-LRboice/releases/tag/1.0.3"
  },
  {
    title: "Library Database Search System",
    projectType: "KSU",
    description: "Dashboard for quick inventory queries and submissions with a minimalist UI. Optimized SQL queries for enhanced search functionality.",
    technologies: ["C#/.NET", "SQL"],
    imageUrl: `${import.meta.env.BASE_URL}library.png`,
    year: "2023", 
    githubUrl: "https://github.com/LRboice/CS560_Team19_Proj"
  },
  {
    title: "Winforms/.NET Auction Service",
    projectType: "KSU",
    description: "A real-time auction system built with C#/.NET and Websockets. Allows users to bid on items and watch them live.",
    technologies: ["C#/.NET", "Websockets"],
    imageUrl: `${import.meta.env.BASE_URL}auction.png`,
    year: "2023", 
    githubUrl: "https://github.com/sahuarolabs/fp-fall-2023-team4a.git"
  },
  {
    title: "The Flying Saucer POS System",
    projectType: "KSU",
    description: "Point-of-Sale System for a fictional restaurant, designed for fast-paced environments with an accessible UI.",
    technologies: ["C#/.NET"],
    imageUrl: `${import.meta.env.BASE_URL}TheFlyingSaucer.png`,
    year: "2023",  
    githubUrl: "https://github.com/ksu-cs/the-flying-saucer-LRboice/releases/tag/v.0.10.0"
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (index: number) => {
    setSelectedProject(projectsData[index]);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-section">
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="project-info">
              <div className="project-type">{project.projectType}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-buttons">
                <button 
                  className="read-more-btn"
                  onClick={() => openModal(index)}
                >
                  Read More
                </button>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <div className="modal-tech-tags">
              {selectedProject.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="modal-year">Year: {selectedProject.year}</div>
            <div className="modal-buttons">
              {selectedProject.githubUrl && (
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects; 