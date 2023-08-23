const Review = ({ title, score }) => {
  console.log("Renderizando Review...");

  return (
    <div>
      <p>
        {title} - {score}
      </p>
    </div>
  );
};

export default Review;
