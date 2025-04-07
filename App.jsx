import React from 'react';
import Navbar from "./components/common/Navbar"; 
import Footer from "./components/common/Footer";
import Front from "./components/Front"; // Use consistent casing
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <div>
      <Navbar />

      <Front />
      <Footer />
    </div>
  );
};

export default App;