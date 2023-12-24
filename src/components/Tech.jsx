import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
const Tech = () => {
  return (
    <div className="flex  justify-center gap-10">



            <h1>Skills</h1>
            <div className="skills-grid">
              {technologies.map((skill) => (
                <div className="skill" key={skill.name}>
                  <img src={skill.icon} alt="css"></img>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
      
      
      
    </div>
  );
};

export default SectionWrapper(Tech, "");
