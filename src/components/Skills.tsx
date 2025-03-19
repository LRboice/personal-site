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
      { name: "React", icon: <DiReact size={50} color="#61DBFB" /> },
      { name: "Next.js", icon: <SiNextdotjs size={50} color="#000000" /> },
      { name: "JavaScript", icon: <SiJavascript size={50} color="#FFCA28" /> },
      { name: "TypeScript", icon: <SiTypescript size={50} color="#007ACC" /> },
      { name: "HTML", icon: <DiHtml5 size={50} color="#E34F26" /> },
      { name: "CSS", icon: <DiCss3 size={50} color="#1572B6" /> },
      { name: "SCSS", icon: <DiSass size={50} color="#CC6699" /> }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: <DiNodejs size={50} color="#339933" /> },
      { name: "Python", icon: <DiPython size={50} color="#3776AB" /> },
      { name: "C#/.NET", icon: <SiDotnet size={50} color="#512BD4" /> },
      { name: "FastAPI", icon: <SiFastapi size={50} color="#009688" /> },
      { name: "SQL", icon: <DiPostgresql size={50} color="#336791" /> },
      { name: "Redis", icon: <SiRedis size={50} color="#DC382D" /> },
      { name: "MongoDB", icon: <DiMongodb size={50} color="#47A248" /> },
      { name: "Firebase", icon: <DiFirebase size={50} color="#FFCA28" /> }
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", icon: <DiGit size={50} color="#F05032" /> },
      { name: "Docker", icon: <DiDocker size={50} color="#2496ED" /> }, 
      { name: "LangChain", icon: <SiLangchain size={50} color="#339933" /> },
      { name: "OpenAI", icon: <SiOpenai size={50} color="#000000" /> },
      { name: "Jira", icon: <DiJira size={50} color="#0052CC" /> }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <div className="skills-section">
      <div className="skills-container">
        {skillsData.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3>{skillCategory.category}</h3>
            <div className="skills-grid">
              {skillCategory.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <p className="skill-name">{skill.name}</p>
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