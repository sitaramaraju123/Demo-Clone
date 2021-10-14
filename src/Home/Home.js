import React from "react";
import Product from "../Products/Product";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home_contaner">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71SDTPswjNL._SX3000_.jpg"
        />
        <div className="home_row">
          <Product
            id="1212321"
            title="Think and Grow Rich Paperback – 1 January 2014"
            price={126.0}
            image="https://m.media-amazon.com/images/I/71AdHA+qqwL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="1212322"
            title="boAt Aavante Bar 1500 2.1 Channel Home Theatre Soundbar with 120W boAt Signature Sound, Wired Subwoofer, Multiple Connectivity Modes, Entertainment EQ Modes and Sleek Finish (Black)"
            price={4999.0}
            image="https://m.media-amazon.com/images/I/61MDpAvYnUS._AC_UL320_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="1212323"
            title="Fossil Gen 5(44mm, black) Carlyle Silicone Touchscreen Men's Smartwatch with Speaker, Heart Rate, GPS, Music storage and Smartphone Notifications - FTW4025"
            price={14995.0}
            image="https://images-eu.ssl-images-amazon.com/images/I/318LcIR9MGL._AC_SR400,600_.jpg"
            rating={5}
          />
          <Product
            id="1212324"
            title="Echo Dot (4th Gen, 2020 release) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (Blue)"
            price={4149.0}
            image="https://m.media-amazon.com/images/I/61u0y9ADElL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="1212325"
            title="Samsung Galaxy Tab S7 FE 31.5 cm (12.4 inch) Large Display, Slim Metal Body, Dolby Atmos Sound, S-Pen in Box, RAM 4 GB, ROM 64 GB..."
            price={36499}
            image="https://m.media-amazon.com/images/I/915rA4VNXuL._AC_SX480_SY360_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="1212326"
            title="Mi 108 cm (43 Inches) Full HD Android Smart LED TV 4A PRO|L43M5-AN (Black)"
            price={24999}
            image="https://m.media-amazon.com/images/I/71deZZ0oDMS._SX679_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
