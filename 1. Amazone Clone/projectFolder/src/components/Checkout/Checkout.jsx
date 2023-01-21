import React from "react";
import Header from "../Header/Header";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../../StateProvider";

import { getBasketTotal } from "../../reducer";

import "./Checkout.css";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <React.Fragment>
      <Header />
      <div className="checkout">
        <div className="left-side">
          <div>
            <h1 className="title">Shopping Cart</h1>
            <a href="#a" className="link-item">
              Deselect all items
            </a>
          </div>

          <div>
            <div className="price-text">Price</div>
          </div>

          {basket.map((item) => (
            <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} />
          ))}

          <div>
            <div>
              <hr />
            </div>
            <div className="subtotal">
              Subtotal ({basket.length} items): <span className="font-bold">${getBasketTotal(basket).toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="subtotal">
            Subtotal ({basket.length} items): <span className="font-bold">${getBasketTotal(basket).toFixed(2)}</span>
          </div>
          <div className="gift">
            <div>
              <input type="checkbox" name="gift" id="gift" />
            </div>
            <div>
              <label htmlFor="gift">This order contains a gift </label>
            </div>
          </div>
          <div className="buy-button">Proceed to checkout</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Checkout;
