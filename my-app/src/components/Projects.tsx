import React from 'react';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projectsData: Project[] = [
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website built with React and TypeScript. Features smooth animations and a clean design.",
    technologies: ["React", "TypeScript", "CSS"],
    imageUrl: "/portfolio-preview.jpg",
    githubUrl: "https://github.com/yourusername/personal-site"
  },
  {
    title: "Task Management App",
    description: "Full-stack task management application with real-time updates, user authentication, and collaborative features.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "WebSocket"],
    imageUrl: "/task-app-preview.jpg",
    liveUrl: "https://task-app.demo",
    githubUrl: "https://github.com/yourusername/task-app"
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce platform with product management, shopping cart, and secure payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/ecommerce-preview.jpg",
    liveUrl: "https://shop.demo",
    githubUrl: "https://github.com/yourusername/ecommerce"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
              <div className="project-links">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 