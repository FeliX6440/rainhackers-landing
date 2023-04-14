import React from "react";
import RainmakerBackground from "../assets/watercolor-d8328f8f2.jpg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "tailwindcss/tailwind.css";

const Value = () => {
  const position = [52.5100078, 13.3745422];

  return (
    <div className="relative w-full h-full" id="impressum">
      <div
        className="bg-cover bg-no-repeat bg-bottom absolute w-full h-full"
        style={{
          backgroundImage: `url(${RainmakerBackground})`,
          transform: "rotate(180deg)",
        }}
      ></div>
      <div
        className="font-montserrat flex flex-col justify-center items-center relative w-full h-full"
        style={{
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <div className="w-full p-0 md:p-0">
          <h2 className="text-white text-4xl md:text-6xl text-center mb-12 mt-12">
            IMPRESSUM
          </h2>
          <div className="location-card bg-white bg-opacity-100 shadow-lg rounded-lg p-4 text-center flex flex-col items-center justify-center">
            <div
              className="map-container rounded-md w-screen h-96 md:h-auto"
              style={{ height: "300px" }}
            >
              <MapContainer
                center={position}
                zoom={16}
                scrollWheelZoom={false}
                className="w-full h-full rounded-md"
                style={{ maxWidth: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <Marker position={position}>
                  <Popup>Bellevuestraße 1, 10785 Berlin, Germany</Popup>
                </Marker>
              </MapContainer>
            </div>
            <div className="text-container mt-4">
              <p className="company-name text-lg">RAINHACKERS AG i. G.</p>
              <p className="management">
                Management: Lutz Fromme, Lorenz Fromme
              </p>
              <p className="aufsichtsrat">
                Aufsichtsrat: Dr. Engelbert Wimmer, Hanns Peter Becker, Geza
                Brugger
              </p>

              <p className="registered-office">
                Registered Office: Geranienstraße 5, 82031 Grünwald, Germany
              </p>

              <p className="district-court">
                District Court: Amtsgericht München
              </p>

              <p className="secondoffice">
                Branch Office: Bellevuestr 1, 10785 Berlin, Germany
              </p>

              <p className="email">
                <a
                  href="mailto:WELCOME@RAINHACKERS.COM"
                  className="text-blue-600"
                >
                  WELCOME@RAINHACKERS.COM
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
