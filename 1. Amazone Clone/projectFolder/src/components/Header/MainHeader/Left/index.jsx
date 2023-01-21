import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="left-side">
      <Link to="/">
      <div className="logo">
        <img src="./assets/logo.svg" alt="" />
      </div>
      </Link>
      <div className="deliver">
        <div className="deliver-container">
          <FiMapPin />
          <div className="deliver-text">
            <div className="info-text">Deliver to</div>
            <div className="main-text">Turkey</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
