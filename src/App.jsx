import React from "react";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="px-5 md:px-32 md:relative">
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
};

export default App;
