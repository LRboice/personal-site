import React from 'react';
import './Skills.css';
import { DiReact, DiNodejs, DiPython, DiGit, DiDocker, DiHtml5, DiCss3, DiSass, DiMongodb, DiPostgresql, DiFirebase, DiJira } from 'react-icons/di';
import { SiNextdotjs, SiTypescript, SiDotnet, SiFastapi, SiRedis, SiJavascript, SiOpenai, SiLangchain } from 'react-icons/si';

interface Skill {
  category: string;
  items: {
    name: string; 
    icon?: any;
  }[];
}

const skillsData: Skill[] = [
  {
    category: "Frontend Development",
    items: [
      { name: "React", icon: <DiReact size={60} color="#61DBFB" /> },
      { name: "Next.js", icon: <SiNextdotjs size={60} color="#000000" /> },
      { name: "JavaScript", icon: <SiJavascript size={60} color="#FFCA28" /> },
      { name: "TypeScript", icon: <SiTypescript size={60} color="#007ACC" /> },
      { name: "HTML", icon: <DiHtml5 size={60} color="#E34F26" /> },
      { name: "CSS", icon: <DiCss3 size={60} color="#1572B6" /> },
      { name: "SCSS", icon: <DiSass size={60} color="#CC6699" /> }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: <DiNodejs size={60} color="#339933" /> },
      { name: "Python", icon: <DiPython size={60} color="#3776AB" /> },
      { name: "C#/.NET", icon: <SiDotnet size={60} color="#512BD4" /> },
      { name: "FastAPI", icon: <SiFastapi size={60} color="#009688" /> },
      { name: "SQL", icon: <DiPostgresql size={60} color="#336791" /> },
      { name: "Redis", icon: <SiRedis size={60} color="#DC382D" /> },
      { name: "MongoDB", icon: <DiMongodb size={60} color="#47A248" /> },
      { name: "Firebase", icon: <DiFirebase size={60} color="#FFCA28" /> }
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", icon: <DiGit size={60} color="#F05032" /> },
      { name: "Docker", icon: <DiDocker size={60} color="#2496ED" /> }, 
      { name: "LangChain", icon: <SiLangchain size={60} color="#339933" /> },
      { name: "OpenAI", icon: <SiOpenai size={60} color="#000000" /> },
      { name: "Jira", icon: <DiJira size={60} color="#0052CC" /> }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <div className="skills-section" style={{
      padding: '64px 0',  // More vertical padding
      width: '100%',
      minHeight: '80vh',  // Take up most of the viewport height
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '48px'  // Space between title and grid
    }}>
      <h2 style={{
        fontSize: '2.5rem', 
      }}>Skills & Expertise</h2>
      <div className="skills-container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(6, 1fr)', 
        gap: '32px', 
        justifyItems: 'center', 
        alignItems: 'center', 
        width: '100%',
        padding: '32px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {skillsData.flatMap(skillGroup => skillGroup.items).map((skill, skillIndex) => (
          <div key={skillIndex} className="skill-item" style={{ 
            textAlign: 'center', 
            padding: '24px',
            borderRadius: '8px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '120px',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {skill.icon}
            <span className="skill-tooltip">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 