import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Value from "./components/Value";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen font-sans antialiased text-gray-900 bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Value */}
      <Value />
    </div>
  );
};

export default Home;
