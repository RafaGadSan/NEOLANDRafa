import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>React Router v6 🧪</h1>
      </header>
      <div>
        <nav>
          <NavLink to="">Home</NavLink>
          <NavLink to="pokemon">Pokemon</NavLink>
          <NavLink to="relojes">Relojes</NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
