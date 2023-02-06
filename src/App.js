import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer2 from "./components/Footer2";
import Footer from "./components/Footer";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Curriculum from "./pages/Curriculum";
import Alumni from "./pages/Alumni";
import News from "./pages/News";
import TugofWar from "./pages/articles/TugWar";
import ReadAloudDay from "./pages/articles/ReadAloudDay";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Navbar Links */}
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/curriculum" element={<Curriculum />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/faq" element={<FAQ />}></Route>
        <Route exact path="/alumni" element={<Alumni />}></Route>
        <Route exact path="/news" element={<News />}></Route>
        {/* Articles */}
        <Route exact path="/articles/tugofwar" element={<TugofWar />}></Route>
        <Route
          exact
          path="/articles/ReadAloudDay"
          element={<ReadAloudDay />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
