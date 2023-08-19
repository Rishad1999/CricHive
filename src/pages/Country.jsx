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
      <div className="grid grid-cols-3 gap-4 mx-20 mt-4">
        <div className="col-span-3">
          <div className="w-560 h-800">
            <div className="bg-white rounded-lg mt-10 ml-10 mr-10 my-10">
              <div className="PlayerbarItem">
                <div className="grid-container h-128 my-10">
                  <Link to="./india">
                    <div className="grid-item px-8 mt-5">
                      <img src={flag_IND} alt="" className="countryImg" />
                      <span className="Title">INDIA</span>
                    </div>
                  </Link>

                  <Link to="./srilanka">
                    <div className="grid-item px-8 mt-5">
                      <img src={flag_SL} alt="" className="countryImg" />
                      <span className="Title">SRI LANKA</span>
                    </div>
                  </Link>

                  <Link to="./aus">
                    <div className="grid-item px-8 mt-5">
                      <img src={flag_ASSIE} alt="" className="countryImg" />
                      <span className="Title">AUSTRALIA</span>
                    </div>
                  </Link>

                  <Link to="./newzealand">
                    <div className="grid-item">
                      <img src={flag_NEWZ} alt="" className="countryImg" />
                      <span className="Title">NEW ZELAND</span>
                    </div>
                  </Link>

                  <Link to="./sa">
                    <div className="grid-item">
                      <img src={flag_SA} alt="" className="countryImg" />
                      <span className="Title">SOUTH AFRICA</span>
                    </div>
                  </Link>

                  <Link to="./west">
                    <div className="grid-item">
                      <img src={flag_WI} alt="" className="countryImg" />
                      <span className="Title">WEST INDIES</span>
                    </div>
                  </Link>

                  <Link to="./afg">
                    <div className="grid-item">
                      <img src={flag_AFG} alt="" className="countryImg" />
                      <span className="Title">AFGANISTAN</span>
                    </div>
                  </Link>

                  <Link to="./eng">
                    <div className="grid-item">
                      <img src={flag_ENG} alt="" className="countryImg" />
                      <span className="Title">ENGLAND</span>
                    </div>
                  </Link>

                  <Link to="./pak">
                    <div className="grid-item">
                      <img src={flag_BAN} alt="" className="countryImg" />
                      <span className="Title">PAKISTAN</span>
                    </div>
                  </Link>

                  {/* <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white-800"></div>

      <Footer />
    </>
  );
};