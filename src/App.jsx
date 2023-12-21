import React from "react";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const App = () => {
  return (
    <main className="px-5 md:px-20">
      <Navbar />
      <Services />
    </main>
  );
};

export default App;
