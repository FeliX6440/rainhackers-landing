import React from "react";
import classNames from "classnames";
import rainmakerImg from "../assets/Rainmaker_Figur.png";
import WatercolorSplash from "../assets/watercolor-splash.png";
import growthHackingImg from "../assets/Growth Hacking_01_abgabe.png";
import { FaFilePdf } from "react-icons/fa"; // Import PDF icon
import { AiOutlineFileText } from "react-icons/ai";

const Principle = ({ title, description, imgSrc, imgAlt, reverse }) => (
  <div
    className={`flex flex-col md:flex-row${
      reverse ? " md:flex-row-reverse" : ""
    } items-center space-y-4 md:space-x-4 lg:space-x-8 font-montserrat mb-6 mt-6`}
  >
    <img
      src={imgSrc}
      alt={imgAlt}
      className="w-auto h-32 lg:h-56 mx-auto lg:mx-0"
    />
    <div
      className={`w-full md:w-auto md:text-${reverse ? "right" : "left"} ${
        reverse ? "text-right md:text-left" : "text-left md:text-right"
      } `}
    >
      <h3
        className={`text-2xl lg:text-3xl font-bold text-purple-700 text-center md:text-${
          reverse ? "right" : "left"
        } md:mb-0`}
      >
        {title}
      </h3>
      <p
        className={`text-lg md:text-xl text-center md:text-${
          reverse ? "right" : "left"
        }`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  </div>
);

const About = () => {
  const principles = [
    {
      title: "The Art of Creating New Business: Rainmaking",
      description:
        "<strong>HACKING THE SALES CODE: </strong>So wie die Schamanen in der Trockenzeit Wasser herbeigezaubert haben, sorgen wir für Ihren Vertriebserfolg in schwierigen Zeiten.",
      imgSrc: rainmakerImg,
      imgAlt: "Rainmaker Illustration",
      reverse: false,
    },
    {
      title: "Solving the Bottleneck: Growth Hacking for Success",
      description:
        "<strong>NO LIMITS: </strong>Wir identifizieren und hacken die Engpässe in Ihrem Unternehmen. Damit mehr Sales auch zu mehr Umsatz führt – und zu einem größeren Wachstum.",
      imgSrc: growthHackingImg,
      imgAlt: "Growth Hacking Illustration",
      reverse: true,
    },
  ];

  const openPresentation = () => {
    window.open(`${process.env.PUBLIC_URL}/presentation.pdf`, "_blank");
  };

  return (
    <section
      className={classNames("px-6", "py-20", "bg-white", "floating-section")}
      id="about"
    >
      <h2
        className={classNames(
          "text-4xl",
          "font-bold",
          "mb-6",
          "text-purple-700",
          "text-center",
          "font-montserrat"
        )}
      >
        Our Key Principles
      </h2>
      <div className={classNames("flex", "flex-col", "items-center")}>
        {principles.map((principle, index) => (
          <Principle key={index} {...principle} />
        ))}
      </div>
    </section>
  );
};

export default About;
