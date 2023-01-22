import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Footer2 from "./components/Footer2"
import Footer from "./components/Footer"
import FAQ from "./pages/FAQ"
import About from "./pages/About"
import Curriculum from "./pages/Curriculum"
import Alumni from "./pages/Alumni"








function App() {

  return (
    
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path='/curriculum' element={<Curriculum />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
        <Route exact path='/faq' element={<FAQ/>}></Route>
        <Route exact path='/alumni' element={<Alumni/>}></Route>
      </Routes>
      <Footer/>   
    </div>      
  
);
}


export default App;
