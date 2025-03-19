import React from 'react';
import './Skills.css';
import { DiReact, DiNodejs, DiPython, DiGit, DiDocker, DiHtml5, DiCss3, DiSass, DiMongodb, DiPostgresql, DiFirebase, DiJira } from 'react-icons/di';
import { SiNextdotjs, SiTypescript, SiDotnet, SiFastapi, SiRedis, SiJavascript, SiOpenai, SiLangchain } from 'react-icons/si';

interface Skill {
  category: string;
  items: {
    name: string; 
    icon?: React.ReactNode;
  }[];
}

const skillsData: Skill[] = [
  {
    category: "Frontend Development",
    items: [
      { name: "React", icon: <DiReact size={40} color="#61DBFB" /> },
      { name: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> },
      { name: "JavaScript", icon: <SiJavascript size={40} color="#FFCA28" /> },
      { name: "TypeScript", icon: <SiTypescript size={40} color="#007ACC" /> },
      { name: "HTML", icon: <DiHtml5 size={40} color="#E34F26" /> },
      { name: "CSS", icon: <DiCss3 size={40} color="#1572B6" /> },
      { name: "SCSS", icon: <DiSass size={40} color="#CC6699" /> }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: <DiNodejs size={40} color="#339933" /> },
      { name: "Python", icon: <DiPython size={40} color="#3776AB" /> },
      { name: "C#/.NET", icon: <SiDotnet size={40} color="#512BD4" /> },
      { name: "FastAPI", icon: <SiFastapi size={40} color="#009688" /> },
      { name: "SQL", icon: <DiPostgresql size={40} color="#336791" /> },
      { name: "Redis", icon: <SiRedis size={40} color="#DC382D" /> },
      { name: "MongoDB", icon: <DiMongodb size={40} color="#47A248" /> },
      { name: "Firebase", icon: <DiFirebase size={40} color="#FFCA28" /> }
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", icon: <DiGit size={40} color="#F05032" /> },
      { name: "Docker", icon: <DiDocker size={40} color="#2496ED" /> }, 
      { name: "LangChain", icon: <SiLangchain size={40} color="#339933" /> },
      { name: "OpenAI", icon: <SiOpenai size={40} color="#000000" /> },
      { name: "Jira", icon: <DiJira size={40} color="#0052CC" /> }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <div className="skills-section">
      <h2>Skills & Expertise</h2>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skills-grid">
              {category.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  {skill.icon}
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 