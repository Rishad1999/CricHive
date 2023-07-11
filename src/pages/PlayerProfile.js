import React, { useState } from "react";
import PlayerImg from "../assets/dhoni.png";
import { TableStat, Footer, SearchPlayer } from "../components";
import "tailwindcss/tailwind.css";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const PlayerProfile = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [playerDetails, setPlayerDetails] = useState({});

  const handleSearch = async (query) => {
    setSearchQuery(query);

    try {
      const response = await firebase
        .database()
        .ref("Mahendra Singh Dhoni")
        .orderByChild("FULL NAME")
        .equalTo(query)
        .once("value");
      const data = response.val();

      if (data) {
        const playerData = Object.values(data)[0];
        setPlayerDetails(playerData);
      } else {
        setPlayerDetails({});
      }
    } catch (error) {
      console.log(error);
      setPlayerDetails({});
    }
  };

  return (
    <>
      <div className="mx-20 mt-5 rounded-lg">
        <SearchPlayer onSearch={handleSearch} />
      </div>

      <div className="shadow-2xl mx-20 mt-5 rounded-lg h-32 sm:h-48 md:h-64 lg:h-96 bg-gradient-to-r from-gray-500 to-slate-300 relative ...">
        <div className="absolute bottom-0 left-0 ml-10 mb-10">
          <h1 className="text-white text-4xl">{playerDetails["FULL NAME"]}</h1>
          <p className="text-white text-3xl">
            India <span>| Wicket Keeper</span>
          </p>
        </div>
        <div className="w-60 absolute bottom-0 right-10 ...">
          <img src={PlayerImg} alt="Logo" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-500 to-slate-300 rounded-lg mx-20 mt-5 shadow-xl">
        <div className="grid grid-cols-3 gap-4 font-medium">
          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>FULL NAME</h2>
            <p>{playerDetails["FULL NAME"]}</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>BORN</h2>
            <p>{playerDetails["BORN"]}</p>
          </div>
          <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>AGE</h2>
            <p>{playerDetails["AGE"]}</p>
          </div>
          <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>HIGHEST RUNS</h2>
            <p>{playerDetails["HIGHEST RUNS"]}</p>
          </div>
          <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>BATTING STYLE</h2>
            <p>{playerDetails["BATTING STYLE"]}</p>
          </div>
          <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>BOWLING STYLE</h2>
            <p>{playerDetails["BOWLING STYLE"]}</p>
          </div>
          <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>FIELDING POSITION</h2>
            <p>{playerDetails["FIELDING POSITION"]}</p>
          </div>
          <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>PLAYING ROLE</h2>
            <p>{playerDetails["PLAYING ROLE"]}</p>
          </div>
          <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>ALSO KNOWN AS</h2>
            <p>{playerDetails["ALSO KNOWN AS"]}</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-500 to-slate-300 rounded-lg mx-20 mt-5 p-3 shadow-xl">
        <p className="text-center font-medium">
          Player Batting Statistics Analysis
        </p>
      </div>

      <div className="shadow-xl rounded-lg mx-20 mt-5 mb-5">
        <TableStat />
      </div>

      <div className="bg-gradient-to-r from-gray-500 to-slate-300 rounded-lg mx-20 mt-5 p-3 shadow-xl">
        <p className="text-center font-medium">
          Player Bowling Statistics Analysis
        </p>
      </div>

      <div className="shadow-xl rounded-lg mx-20 mt-5 mb-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Year
                </th>
                <th scope="col" className="px-6 py-3">
                  Mat
                </th>
                <th scope="col" className="px-6 py-3">
                  Wickets
                </th>
                <th scope="col" className="px-6 py-3">
                  Runs Given
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                  Economy
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows */}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};
