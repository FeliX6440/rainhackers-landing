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
          <h2 className="text-white text-3xl font-bold md:text-4xl text-center mb-8 mt-8">
            Impressum
          </h2>
          <div className="location-card bg-white bg-opacity-100 shadow-lg rounded-lg p-4 text-center flex flex-col items-center justify-center">
            <div className="text-container mt-0">
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
