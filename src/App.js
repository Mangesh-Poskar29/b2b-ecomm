import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Componenet/Footer/Footer";
import Home from "./Componenet/Home/Home";
import Navbar from "./Componenet/Navbar/Navbar";
import ConstructionProductPage from "./Componenet/ProductPage/ConstructionProductPage"; // Import your ProductPage component
import ElectricalProductPage from "./Componenet/ProductPage/ElectricProductPage";
import PharmacyProductPage from "./Componenet/ProductPage/PharmacyProductPage";
import MachineryProductPage from "./Componenet/ProductPage/MachineryProductPage";
import IndustrialSuppliesProductPage from "./Componenet/ProductPage/IndustrialSuppliesProductPage";
import FoodProductPage from "./Componenet/ProductPage/FoodProductPage";
import SellPage from "./Componenet/SellPage";
import SignIn from "./Componenet/Sign-InPage/SignIn";
import SignUp from "./Componenet/Sign-UpPage/SignUp";
import ShoppingPage from "./Componenet/Pages/ShoppingPage";
import KnowledgeBasePage from "./Componenet/Pages/KnowledgeBasePage";
import ContactUsPage from "./Componenet/Pages/ContactUsPage";
import LadiesWear from "./Componenet/Category/LadiesWear";
import MenWear from "./Componenet/Category/MenWear";
import FootWear from "./Componenet/Category/FootWear";
import BeautyProduct from "./Componenet/Category/BeautyProduct";
import PetProduct from "./Componenet/Category/PetProduct";
import MobileAcess from "./Componenet/Category/MobileAcess";
import CleaningSupply from "./Componenet/Category/CleaningSupply";
import HomeDecor from "./Componenet/Category/HomeDecor";
import Jewellry from "./Componenet/Category/Jwellery";
import Light from "./Componenet/Category/Light";
import SellerDashboard from "./Componenet/Dashboard/SellerDashboard";
import BrandDetails from "./Componenet/Home/BrandDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login/seller" element={<SellerDashboard/>} />
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/shopping/women-wear" element={<LadiesWear />} />
        <Route path="/shopping/men-wear" element={<MenWear />} />
        <Route path="/shopping/foot-wear" element={<FootWear />} />
        <Route path="/shopping/beauty" element={<BeautyProduct />} />
        <Route path="/shopping/pet-food" element={<PetProduct />} />
        <Route path="/shopping/mobile-accessories" element={<MobileAcess />} />
        <Route path="/shopping/cleaning-supply" element={<CleaningSupply />} />
        <Route path="/shopping/home-decor" element={<HomeDecor />} />
        <Route path="/shopping/artificial-jewel" element={<Jewellry />} />
        <Route path="/shopping/light" element={<Light />} />
        <Route path="/help" element={<KnowledgeBasePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/brand/:brandId" element={<BrandDetails />} />
        <Route
          path="/products/construction"
          element={<ConstructionProductPage />}
        />
        <Route
          path="/products/electrical"
          element={<ElectricalProductPage />}
        />
        <Route path="/products/pharmacy" element={<PharmacyProductPage />} />
        <Route path="/products/machinery" element={<MachineryProductPage />} />
        <Route
          path="/products/industrial-supplies"
          element={<IndustrialSuppliesProductPage />}
        />
        <Route path="/products/food" element={<FoodProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
