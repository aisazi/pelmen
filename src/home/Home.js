import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="homeBanner wrapper-x">
        <h1>Welcome to Home of Handmade Yummy Pelmen's</h1>
        <button className="buttonAnimation">Our Proucts</button>
      </div>
      <div className="wrapper-x wrapper-y popularText">
        <h1>What's Popular</h1>
        <div className="cardWrap">
          <div className="card">
            <div className="img-wrap">
              <img src="../manty.jpg" />
            </div>
            <h2>Manty</h2>
          </div>
          <div className="card">
            <div className="img-wrap">
              <img src="../pelmen.jpg" />
            </div>
            <h2>Pelmen</h2>
          </div>
          <div className="card">
            <div className="img-wrap">
              <img src="../cutlet.jpg" />
            </div>
            <h2>Cutlet</h2>
          </div>
        </div>
      </div>
      <div className="textContent wrapper-x">
        <p>
          At HANDMADE.COM, we bring the authentic taste of handmade goodness to
          your table. Our dumplings are crafted with care, using only the finest
          ingredients, to ensure every bite is a celebration of flavor and
          tradition.
        </p>
      </div>
      <div className="groupImgWrap wrapper-x wrapper-y">
        <div className="groupImg">
          <div className="row-one">
            <div className="groupImgOne">
              <h2>What We Offer</h2>
              <p>Classic Dumplings</p>
              <p>
                we offer a variety of classic flavors that suit every palate
              </p>
            </div>
            <div className="groupImgTwo"></div>
          </div>
          <div className="row-two">
            <div className="groupImgThree"></div>
            <div className="groupImgFour">
              <h2>Why Choose Us?</h2>
              <p>Homemade Perfection</p>
              <p>
                Each dumpling is made in our home kitchen, preserving the
                authentic techniques and recipes passed down through
                generations.
              </p>
              <p>Fresh, Quality Ingredients</p>
              <p>
                We source fresh, local produce and premium cuts of meat to
                create fillings that burst with flavor.
              </p>
              <p>No Compromises</p>
              <p>
                No preservatives, no shortcuts—just wholesome, delicious
                dumplings made with love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
