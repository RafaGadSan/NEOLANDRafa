export const Figure = ({ data }) => {
  return (
    <figure>
      <img src={data.url} alt={data.title} />
      <div className="window">
        <div className="title-bar">
          <button aria-label="Close" className="close">
            Close
          </button>
          <h1 className="title">{data.title}</h1>
          <button aria-label="Resize" className="resize">
            Resize
          </button>
        </div>
        <div className="details-bar">
          <span>{data.date}</span>
          <span>{data.copyright}</span>
        </div>
        <div className="window-pane">{data.explanation}</div>
      </div>
    </figure>
  );
};
