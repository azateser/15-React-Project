import React from "react";
import { useStateValue } from "../../StateProvider";

import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, title, image, price }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <React.Fragment>
      <hr className="my-2" />
      <div className="checkout-product">
        <div className="select">
          <input type="checkbox" checked name="" id="" />
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div>
          <div className="title">{title}</div>
          <div className="stock-status">In Stock</div>
          <div className="gift">
            <div className="mt-1">
              <input type="checkbox" name="gift" id="gift" />
            </div>
            <div>
              <label htmlFor="gift">This is a gift </label>
              <a href="#a" className="text-sm  text-[#007185] hover:text-[#C7511F] hover:underline">
                Learn more
              </a>
            </div>
          </div>
          <div className="actions">
            <div>
              <a onClick={removeFromBasket} href="#a" className="delete">
                Delete
              </a>
            </div>
            <div className="sperator"></div>
            <div>
              <span className="link-item">Save for later</span>
            </div>
            <div className="sperator"></div>
            <div>
              <span className="link-item">Add to list</span>
            </div>
            <div className="sperator"></div>
            <div>
              <span className="link-item">Compare with similar items</span>
            </div>
          </div>
        </div>
        <div className="price">
          <div className="text">${price}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CheckoutProduct;
