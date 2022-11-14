import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import News from "./Components/News";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <News />
      <Footer />
    </div>
  );
}

export default App;
