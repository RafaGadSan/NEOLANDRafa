import React from "react";
import "./More.css";

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div className="more">
      <div className="card">
        <h2>More</h2>
        <div className="languages">
          <h3>Languages</h3>
          <p>{languages.language}</p>
          <p>Written: {languages.wrlevel}</p>
          <p>Spoken: {languages.splevel}</p>
        </div>
        <div className="habilities">
          <h3>Abilities</h3>
          <ul>
            {habilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="volunteer">
          <h3>Volunteer</h3>
          {volunteer.map((item, index) => (
            <div key={index} className="volunteer-item">
              <h4>{item.name}</h4>
              <p className="where">{item.where}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default More;
