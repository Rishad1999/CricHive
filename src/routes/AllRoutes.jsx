import { Routes, Route } from "react-router-dom";
import {
  Country,
  Homepage,
  PlayerComparision,
  PlayerProfile,
  AboutUs,
  BuyNow,
} from "../pages";

import {
  CountryIndia,
} from "../pages/countries";

import { NavBar } from "../components";
// import { Home } from "../components/Home";

export const AllRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="playerComparision" element={<PlayerComparision />} />
        <Route path="playerProfile" element={<PlayerProfile />} />
        <Route path="country" element={<Country />} />
        <Route path="country/india" element={<CountryIndia />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="buyNow" element={<BuyNow />} />
      </Routes>
    </div>
  );
};
