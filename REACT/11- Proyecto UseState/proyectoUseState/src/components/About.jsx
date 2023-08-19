import React from "react";
import "./About.css";

const About = ({ hero }) => {
  return (
    <div className="about">
      <div className="card">
        <h2>About Me</h2>
        {hero.aboutMe.map((item, index) => (
          <p key={index}>{item.info}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
