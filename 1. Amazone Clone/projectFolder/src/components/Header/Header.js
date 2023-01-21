import "./Header.css";
import MainHeader from "./MainHeader/MainHeader";
import SecondHeader from "./SecondHeader/SecondHeader";

const Header = () => {
  return (
    <header className="header">
     <MainHeader />
     <SecondHeader />
    </header>
  );
};

export default Header;
