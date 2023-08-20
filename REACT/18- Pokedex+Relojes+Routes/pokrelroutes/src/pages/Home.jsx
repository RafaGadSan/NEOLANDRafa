import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h2>Home Page</h2>

      <p>App ejemplo sobre React Router</p>

      <ul>
        <li>
          <p>
            <span>Pokemon</span>
            <Link to="pokemon">Pokemon</Link>
          </p>
        </li>
        <li>
          <p>
            <span>Relojes</span>
            <Link to="relojes">Relojes</Link>
          </p>
        </li>
      </ul>
    </>
  );
}

export default Home;
