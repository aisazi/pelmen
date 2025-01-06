import react from "react";
import React, { useState } from "react";
import { Map, Marker } from "@vis.gl/react-google-maps";
import "./WhereToBuy.css";
import { APIProvider } from "@vis.gl/react-google-maps";

export default function WhereToBuy() {
  const locationData = [
    {
      lat: 40.61012,
      lng: -73.98355,
      text: "42 Avenue O",
      subText: "Brooklyn, NY 11204",
      openTime: "11 am to 11pm",
      name: "Cafe Lily",
      phone: "+17188725500",
    },
    {
      lat: 40.61805,
      lng: -73.98402,
      text: "2339 65th St",
      subText: "Brooklyn, NY 11204",
      openTime: "9am to 9pm",
      name: "Netcost Market",
      phone: "+17186277449",
    },
    {
      lat: 40.61207,
      lng: -73.97798,
      text: "6201 20th Ave",
      subText: "Brooklyn, NY 11204",
      openTime: "10 am to 9pm",
      name: "Lagman House",
      phone: "+17182320525",
    },
  ];
  return (
    <div>
      <div className="popularText wrapper-x">
        <h1>
          Welcome to HANDMADE Pelmeni, where tradition meets quality in every
          bite!
        </h1>
      </div>
      <div className="googleMap">
        {locationData.map((item) => {
          return (
            <div className="map-wrap">
              <APIProvider apiKey="AIzaSyCYP784bQZZfkw0f9NakZUA_9x9oj0aZGY">
                <div className="map-container">
                  <Map
                    defaultZoom={13}
                    defaultCenter={item}
                    gestureHandling={"greedy"}
                  >
                    <Marker position={item} />
                  </Map>
                </div>
              </APIProvider>
              <div>
                <h2>{item?.name}</h2>
                <p>{item?.phone}</p>
                <p>{item?.text}</p>
                <p>{item?.subText}</p>
                <p>{item?.openTime}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
