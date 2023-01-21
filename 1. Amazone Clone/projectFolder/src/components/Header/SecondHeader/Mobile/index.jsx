import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../../StateProvider";

const Index = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="mobile-menu">
      <div className="left-side">
        <div className="flex w-max gap-1">
          <div>
            <div className="text-sm leading-5 text-gray-100">Sign in</div>
          </div>
        </div>
      </div>

      <div className="all-categories">All Cattegories</div>
      <Link to="/checkout">
        <div className="right-side">
          <div>
            <span className="font-bold text-[#f08804]">{basket.length}</span> Product
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Index;
