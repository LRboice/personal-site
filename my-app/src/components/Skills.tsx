import React from 'react';
import './Skills.css';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
    icon?: string;
  }[];
}

const skillsData: Skill[] = [
  {
    category: "Frontend Development",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Next.js", level: 80 },
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 75 },
      { name: "REST APIs", level: 90 },
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 80 },
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <div className="skills-section">
      <h2>Skills & Expertise</h2>
      <div className="skills-container">
        {skillsData.map((skillGroup, index) => (
          <div key={index} className="skill-category">
            <h3>{skillGroup.category}</h3>
            <div className="skills-list">
              {skillGroup.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
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