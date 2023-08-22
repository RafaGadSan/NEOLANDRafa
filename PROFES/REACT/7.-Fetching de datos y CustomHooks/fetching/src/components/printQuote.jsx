import useCounter from "../Hooks/useCounter";
import useFetch from "../Hooks/useFetch";
import Loading from "./Loading";
import Quote from "./Quote";

const PrintQuote = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  // como ya tenemos la data que nos trae isFetch vamos a hacer destructuring de author quote
  const { author, quote } = !!data && data[0];

  if (hasError) {
    return (
      <>
        <div className="alert alert-danger text-center">
          {hasError.toString()}
        </div>
      </>
    );
  }
  return (
    <>
      {isLoading ? <Loading /> : <Quote author={author} quote={quote} />}
      <button
        className="btn btn-primary"
        // desabilitamos el boton cuando isLoading este a true
        disabled={isLoading}
        // increment viene del useCounter
        onClick={() => increment()}
      >
        NEXT QUOTE
      </button>
    </>
  );
};

export default PrintQuote;
