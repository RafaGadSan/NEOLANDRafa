import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h2>Home Page</h2>

      <p>App ejemplo sobre React Router</p>

      <ul>
        <li>
          <p>
            <span>Visita la página de héroes 🦸‍♀️:</span>
            <Link to="heroes">Heroes</Link>
          </p>
        </li>
      </ul>
    </>
  );
}

export default Home;
