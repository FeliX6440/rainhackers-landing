import React from "react";
import { motion } from "framer-motion";
import RainmakerBackground from "../assets/watercolor-d8328f8f2.jpg";

const Hero = () => {
  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 0.5 } },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { delay: 2, duration: 1 } },
  };

  return (
    <div
      className="h-500 bg-cover bg-no-repeat bg-top font-montserrat flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${RainmakerBackground})`,
        fontFamily: "Montserrat, sans-serif", // specify the Montserrat font
      }}
    >
      <header className="flex justify-between items-center w-full px-6 sm:px-20 py-4">
        {/* Add logo and link to the Impressum page */}
      </header>
      <motion.section
        className="headline text-white text-center"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-semibold"
          variants={headlineVariants}
        >
          Shaping
          <br />
          the sales process
          <br />
          of tomorrow
          <br />
        </motion.h1>
        <motion.a
          className="cta mt-4 py-2 px-8 bg-white text-black rounded-full inline-block transition duration-300 hover:bg-opacity-80"
          variants={ctaVariants}
          href="mailto: welcome@rainhackers.com?subject=Kontaktanfrage%20RainHackers"
        >
          Contact Us
        </motion.a>
      </motion.section>
      <br></br>
      <a
        href="##pitchdeck"
        class="text-white hover:bg-white hover:text-black transition-all duration-300"
      >
        <span class="font-bold">SEE OUR PITCHDECK</span>
      </a>
    </div>
  );
};

export default Hero;
