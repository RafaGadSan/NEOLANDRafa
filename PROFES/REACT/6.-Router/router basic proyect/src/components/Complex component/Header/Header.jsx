import FlexCenter from "../../../layouts/FlexCenter/FlexCenter";
import Nav from "../Nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <FlexCenter>
        <Nav />
      </FlexCenter>
    </header>
  );
};

export default Header;
