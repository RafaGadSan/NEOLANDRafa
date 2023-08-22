import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>LOGO</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
