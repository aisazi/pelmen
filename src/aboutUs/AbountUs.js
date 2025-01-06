import react from "react";
import "./AboutUs.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function AboutUs() {
  return (
    <div className="aboutUs">
      <AutoplaySlider play={true} cancelOnInteraction={false} interval={3000}>
        <div data-src="../pelmen.jpg" />
        <div data-src="../cooking.jpg" />
        <div data-src="../cutlet.jpg" />
      </AutoplaySlider>
      <div className="rowOne">
        <div className="colOne">
          <h1>About Us</h1>
          <p>
            We are passionate about crafting fresh, natural, and handmade
            pelmeni that bring the taste of tradition to your table. Every piece
            is prepared with care, using only the finest ingredients, to deliver
            authentic flavors that you and your family will love.
          </p>
        </div>
        <div className="colTwo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmcc7xEB9xUqnJDYPkf4f8bV_MRBq_fFJbyQ&s" />
        </div>
      </div>
      <div className="rowTwo">
        <div className="colOne">
          <img src="https://media.istockphoto.com/id/1188382652/photo/woman-cooking-polish-dumplings-at-kitchen.jpg?s=612x612&w=0&k=20&c=rC4C8TPEdAig9OrOrBDxZ5Ag-ya9oSLkqM9r3IETRlU=" />
        </div>
        <div className="colTwo">
          <h2>Our Mission: Bringing Handmade Tradition to Your Table</h2>
          <p>
            We believe in creating food that’s fresh, wholesome, and filled with
            care. Our mission is to deliver the finest handmade pelmeni to the
            communities of Brooklyn and beyond, offering a convenient way to
            enjoy the comfort of authentic, homemade flavors.
          </p>
        </div>
      </div>
      <div className="rowThree">
        <div className="colOne">
          <img src="https://www.daadumplings.com/cdn/shop/articles/Pelmeni_vs_Pierogi_Comparing_Russian_Dumplings_and_Eastern_European_Delicacies.jpg?v=1724342495&width=1100" />
        </div>
        <div className="colTwo">
          <h2>Our Story</h2>
          <p>
            Handle Made Pelmei was born from a love for tradition and a desire
            to share the warmth of homemade food with the people of New York.
            Starting in Brooklyn, we’ve dedicated ourselves to handcrafting
            every pelmeni, ensuring each bite is packed with quality and flavor.
          </p>
        </div>
      </div>
    </div>
  );
}
