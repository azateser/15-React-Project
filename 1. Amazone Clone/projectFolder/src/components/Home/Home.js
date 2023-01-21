import React from "react";
import Header from "../Header/Header";
import Product from "./Product";

import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="slider-image">
        <img src="./assets/homepage/slider/slider1.jpg" alt="" />
      </div>

      <div className="information-box">
        <div className="text">
          You are on amazon.com. You can also shop on Amazon Turkey for millions of products with fast local delivery.{" "}
          <a href="#a" className="link">
            Click here to go to amazon.com.tr
          </a>
        </div>

        <div className="products">
          <Product id={1} title="KMAT Kitchen Mat [2 PCS] Cushioned Anti-Fatigue Kitchen Rug, Waterproof Non-Slip Kitchen Mats and Rugs Heavy Duty PVC..." price={29.99} rating={3} reviews={37.623} image="https://m.media-amazon.com/images/I/81XWEHKPCqL._AC_UL640_FMwebp_QL65_.jpg" />
          <Product id={2} title="GHome Smart SL1 TV LED Backlight, 9.2ft Smart WiFi Strip Light Compatible with Alexa and Google Home, App Control, Musi..." price={9.99} rating={4} reviews={466} image="https://m.media-amazon.com/images/I/71vjroVtwKL._AC_UL640_FMwebp_QL65_.jpg" old_price={299.99} />
          <Product id={3} title="GenSwin Gray Glass Battery Operated Flameless Led Candles with 10-Key Remote and Timer, Real Wax Candles Warm White..." price={21.99} rating={5} reviews={3.916} image="https://m.media-amazon.com/images/I/61XUX0KCA2L._AC_UL640_FMwebp_QL65_.jpg" old_price={39.99} />

          <Product id={4} title="Mckanti 8 Pcs Drink Coasters with Holder, 4 Colors Absorbent Coasters for Drinks, Minimalist Cotton Woven Coaster Set for..." price={9.99} rating={3} reviews={37.623} image="https://m.media-amazon.com/images/I/81D9ybwtAEL._AC_UL640_FMwebp_QL65_.jpg" />
          <Product id={5} title="Cocorrína Reed Diffuser Set, 6.7 oz Clean Linen Scented Diffuser with Sticks Home Fragrance Essential Oil Reed Diffuser for Bathroom..." price={19.14} rating={4} reviews={466} image="https://m.media-amazon.com/images/I/71G8H9JSwXL._AC_UL640_FMwebp_QL65_.jpg" old_price={299.99} />
          <Product id={6} title="GODDSEVOES Storage Pull, 2 Tier Under-Sink Drawer 4 Hook 1 Cup, Black Under Sliding Cabinet Basket Organizer for Bathroom/Kitchen..." price={21.99} rating={5} reviews={3.916} image="https://m.media-amazon.com/images/I/71CLg3jGBcL._AC_UL640_FMwebp_QL65_.jpg" old_price={39.99} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
