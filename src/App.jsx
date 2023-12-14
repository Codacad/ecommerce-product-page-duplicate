import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Collections from "./pages/Collections";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Contact from "./pages/Contact";
import About from "./pages/About";
function App() {
  return (
    <>
      <div className="app">
        <Navbar />        
        <Routes>
          <Route path="/" element={<Collections />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {/* Sneaker Company

  Fall Limited Edition Sneakers

  These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.

  $125.00
  50%
  $250.00

  0
  Add to cart
  <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> */}
    </>
  );
}

export default App;
