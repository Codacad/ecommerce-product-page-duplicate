import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Collections from "./pages/Collections";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./components/Product";
function App() {
  return (
    <>
      <div className="app">
        <Navbar />        
        <Routes>
          <Route path="/" element={<Collections />} />
          <Route path="/men" element={<Product />} />
          <Route path="/women" element={<Women />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {/*

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
