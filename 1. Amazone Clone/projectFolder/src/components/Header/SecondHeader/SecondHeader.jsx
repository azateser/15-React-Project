import DesktopMenu from "./Desktop";
import MobileMenu from "./Mobile";

const SecondHeader = () => {
  return (
    <div className="second-header">
      <DesktopMenu />
      <MobileMenu />
    </div>
  );
};

export default SecondHeader;
