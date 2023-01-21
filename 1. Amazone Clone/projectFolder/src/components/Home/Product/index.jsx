import { AiFillCaretDown } from "react-icons/ai";

import React from "react";
import Rate from "./Rate";

import { useStateValue } from "../../../StateProvider";

import "./Product.css";

const Index = ({ id, title, price, rating, reviews, image, old_price }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title,
        price,
        rating,
        reviews,
        image,
        old_price,
      },
    });
  };

  return (
    <div className="product">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">{title}</div>
      <div className="review">
        <Rate rating={rating} />
        <div className="text">
          <div>
            <AiFillCaretDown size={12} />
          </div>
          <div>
            <b>{reviews}</b> Review
          </div>
        </div>
      </div>
      <div className="price">
        <div className="flex">
          <div>$</div>
          <div className="text-3xl">{price}</div>
        </div>
        {old_price && <div className="old-price">$ {old_price}</div>}
      </div>
      <div className="flex gap-4">
        <div onClick={addToBasket} className="add-to-cart">
          Add To Cart
        </div>
        <div className="add-to-basket">Buy Now</div>
      </div>
    </div>
  );
};

export default Index;
