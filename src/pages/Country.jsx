import React, { useState } from "react";
import "./country.css";
import { Link } from "react-router-dom";

import { Footer } from "../components";

import flag_SL from "../assets/countriesAssets/11.jpg";
import flag_IND from "../assets/countriesAssets/12.jpg";
import flag_ASSIE from "../assets/countriesAssets/13.jpg";
import flag_NEWZ from "../assets/countriesAssets/15.png";
import flag_SA from "../assets/countriesAssets/16.jpg";
import flag_WI from "../assets/countriesAssets/17.png";
import flag_AFG from "../assets/countriesAssets/18.jpg";
import flag_ENG from "../assets/countriesAssets/19.png";
import flag_BAN from "../assets/countriesAssets/20.jpg";
import backgroundImage from "../assets/countriesAssets/backgroundImage.jpg";

export const Country = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: url($,{backgroundImage}) }}>
        <div className="Playerbar">
          <div className="PlayerbarProfile">
            <div className="PlayerbarItem">
            

              <span className="PlayerbarTitle">MATCHES</span>

              <div className="dropdown">
                <span>PREVIOUS YEARS MATCHES :</span>
                <select
                  className="options"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="option1">2019</option>
                  <option value="option2">2020</option>
                  <option value="option3">2021</option>
                </select>
              </div>
              <div className="grid-container">
                <Link to="./india">
                  <div className="grid-item">
                    <img src={flag_IND} alt="" className="countryImg" />
                    <span className="Title">INDIA</span>
                  </div>
                </Link>
                {/* <div className="grid-item">
              <img src={flag_IND} alt="" className="countryImg" />
              <span className="Title">INDIA</span>
            </div> */}
                <div className="grid-item">
                  <img src={flag_SL} alt="" className="countryImg" />
                  <span className="Title">SRI LANKA</span>
                </div>
                <div className="grid-item">
                  <img src={flag_ASSIE} alt="" className="countryImg" />
                  <span className="Title">AUSTRALIA</span>
                </div>
                <div className="grid-item">
                  <img src={flag_NEWZ} alt="" className="countryImg" />
                  <span className="Title">NEW ZELAND</span>
                </div>
                <div className="grid-item">
                  <img src={flag_SA} alt="" className="countryImg" />
                  <span className="Title">SOUTH AFRICA</span>
                </div>
                <div className="grid-item">
                  <img src={flag_WI} alt="" className="countryImg" />
                  <span className="Title">WEST INDIES</span>
                </div>
                <div className="grid-item">
                  <img src={flag_AFG} alt="" className="countryImg" />
                  <span className="Title">AFGANISTAN</span>
                </div>
                <div className="grid-item">
                  <img src={flag_ENG} alt="" className="countryImg" />
                  <span className="Title">ENGLAND</span>
                </div>
                <div className="grid-item">
                  <img src={flag_BAN} alt="" className="countryImg" />
                  <span className="Title">PAKISTAN</span>
                </div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};