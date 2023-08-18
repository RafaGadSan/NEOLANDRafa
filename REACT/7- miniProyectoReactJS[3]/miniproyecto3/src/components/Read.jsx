import React from "react";

const Author = ({ hobbies }) => {
  return (
    <div className="author">
      <p>
        El libro {hobbies.read.title} del género {hobbies.read.genre} publicado
        el día {hobbies.read.datePublicaction} fue escrito por{" "}
        {hobbies.read.authorName} {hobbies.read.authorSurname}, nacido el{" "}
        {hobbies.read.authorBirthDate}
      </p>
      <img src={hobbies.read.bookImage} />
    </div>
  );
};
const Books = ({ hobbies }) => {
  return (
    <div className="books">
      <h3>Otros libros de interés:</h3>
      <ul>
        {hobbies.read.otherBooks.map((book, index) => (
          <li key={index}>{book.info}</li>
        ))}
      </ul>
    </div>
  );
};

const Read = ({ hobbies }) => {
  return (
    <div>
      <h2>Libros que he leído</h2>
      <Author hobbies={hobbies} />
      <Books hobbies={hobbies} />
    </div>
  );
};

export default Read;
