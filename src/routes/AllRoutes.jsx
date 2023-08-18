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
  CountrySa,
  CountryWes,
  CountryPak,
  CountryNewzealand,
  CountryEng,
  CountryAus,
  CountrySl,
  CountryAfg,  
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
        <Route path="country/Sa" element={<CountrySa />} />
        <Route path="country/west" element={<CountryWes />} />
        <Route path="country/pak" element={<CountryPak />} />
        <Route path="country/Newzealand" element={<CountryNewzealand />} />
        <Route path="country/Eng" element={<CountryEng  />} />
        <Route path="country/Aus" element={<CountryAus  />} />
        <Route path="country/Afg" element={<CountryAfg />} />
        <Route path="country/srilanka" element={<CountrySl />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="buyNow" element={<BuyNow />} />
      </Routes>
    </div>
  );
};
