import { GrSearch } from "react-icons/gr";
import { AiFillCaretDown } from "react-icons/ai";

const index = () => {
  return (
    <div className="search">
      <div className="all-categories">
        <div>All</div>
        <div>
          <AiFillCaretDown size={10} />
        </div>
      </div>
      <div className="search-container">
        <input className="search-input" disabled type="text" />
      </div>
      <div className="search-button">
        <div>
          <GrSearch size={20} />
        </div>
      </div>
    </div>
  );
};

export default index;
