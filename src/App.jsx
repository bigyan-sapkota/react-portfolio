import React from "react";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

const App = () => {
  return (
    <main className="px-5 md:px-32 md:relative">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
    </main>
  );
};

export default App;
