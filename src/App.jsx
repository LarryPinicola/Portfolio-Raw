import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DataSection from "./components/DataSection";
import Letter from "./components/Letter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DataSection />
      <Letter/>
      <Cards/>
      <Footer/>
    </div>
  );
};

export default App;
