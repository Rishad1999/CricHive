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
  CountrySl,
  CountryAfg,
  CountryAus,
  CountryEng,
  CountryNewzealand,
  CountryPak,
  CountrySa,
  CountryWes,

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
        <Route path="country/srilanka" element={<CountrySl />} />
        <Route path="country/afg" element={<CountryAfg />} />
        <Route path="country/aus" element={<CountryAus />} />
        <Route path="country/eng" element={<CountryEng />} />
        <Route path="country/pak" element={<CountryPak />} />
        <Route path="country/sa" element={<CountrySa />} />
        <Route path="country/west" element={<CountryWes />} />
        <Route path="country/newzealand" element={<CountryNewzealand />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="buyNow" element={<BuyNow />} />
      </Routes>
    </div>
  );
};
