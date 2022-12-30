import {
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Footer2 from "./components/Footer2"
import FAQ from "./pages/FAQ"





function App() {

  return (
    
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path='/faq' element={<FAQ/>}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
      </Routes>
      <Footer2/>   
    </div>      
  
);
}


export default App;
