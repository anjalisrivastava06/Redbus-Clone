import MainPage from "./components/MainPage";
import OurPromise from "./components/OurPromise";
import DiscountCoupon from "./components/Discount";
import Footer from "./components/Footer";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import React from "react";


function App() {
  return (  
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
      <DiscountCoupon />
      <OurPromise />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

