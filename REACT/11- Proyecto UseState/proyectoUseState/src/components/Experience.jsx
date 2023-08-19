import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <div className="experience">
      <div className="card">
        <h2>Experience</h2>
        {experience.map((item, index) => (
          <div key={index} className="experience-item">
            <h3>{item.name}</h3>
            <p className="date">{item.date}</p>
            <p className="where">{item.where}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
