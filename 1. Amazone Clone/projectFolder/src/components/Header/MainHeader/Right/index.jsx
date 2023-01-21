import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useStateValue } from "../../../../StateProvider";

const Index = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="right-side">
      <div className="language-container">
        <div className="image">
          <img className="image" src="./assets/flags/usa.svg" alt="" />
        </div>
        <div className="flex items-end gap-1">
          <div className="font-bold leading-3">EN</div>
          <div className="text-gray-300">
            <AiFillCaretDown size={10} />
          </div>
        </div>
      </div>
      <div className="sign-container">
        <div className="flex w-max gap-1">
          <div>
            <div className="info-text">Hello, sign in</div>
            <div className="main-text">Account & Lists</div>
          </div>
          <div className="down-arrow">
            <AiFillCaretDown size={10} />
          </div>
        </div>
      </div>
      <div className="orders-container">
        <div className="w-max">
          <div className="info-text">Returns</div>
          <div className="main-text">& Orders</div>
        </div>
      </div>
      <Link to="/checkout">
        <div className="cart">
          <div className="relative">
            <img className="w-8" src="./assets/header/basket.svg" alt="" />
            <div className="cart-count">{basket.length}</div>
          </div>
          <div className="font-bold">Cart</div>
        </div>
      </Link>
    </div>
  );
};

export default Index;
