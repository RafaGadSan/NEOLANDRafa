import React from "react";

const Languages = ({ hobbies }) => {
  return (
    <div className="languages">
      <h2>Languages</h2>
      <p>
        Nivel escrito de {hobbies.languages.language} es de
        {hobbies.languages.wrlevel} y el nivel oral es{" "}
        {hobbies.languages.splevel}{" "}
      </p>
    </div>
  );
};

export default Languages;
