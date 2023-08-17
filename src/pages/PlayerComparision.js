import { useEffect, useState } from "react";
import "./PlayerComparision.css";
import { SearchPlayer, Footer } from "../components";
import Player1Img from "../assets/8.png";
import Player2Img from "../assets/kholiProf.png";
import vsImg from "../assets/homepageAssets/15.png";
import fight from "../assets/fight.jpg";

export const PlayerComparision = () => {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [selectedYear, setSelectedYear] = useState();

  const handleSearchResults = (searchResults) => {
    setPlayer1(searchResults[0]);
  };

  const handleSearchResults1 = (searchResults) => {
    setPlayer2(searchResults[0]);
  };

  return (
    
    <>
    <div className="page-wrapper">
     
    <div className="grid grid-cols-3 gap-4 mx-20 mt-4">
      <div className="mr-6 ml-1">
        <SearchPlayer onSearchResults={handleSearchResults} />
      </div>

      <div className=""></div>

      <div className="ml-6 mr-1">
        <SearchPlayer onSearchResults={handleSearchResults1} />
      </div>

      
    </div>

    {(!player1 && !player2) && (
        <div className="grid grid-cols-3 gap-4 mx-20 mt-4">
          <div className="col-span-3">
            <img src={fight} alt="../assets/fight.jpg" className="animated-image" />
          </div>
        </div>
)}
      

      {player1 && (
        <div className="mx-10 p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-red-100 rounded-xl shadow-lg m-5 mt-2">
              <div className="PlayerbarLeft">
                <div className="PlayerbarItem">
                  <span className="PlayerbarTitle">{player1.name}</span>
                  <img className="" src={Player1Img} alt="player1 image" />
                </div>
              </div>
            </div>

            <div className="">
              <div className="">
                <div className="flex flex-col items-center">
                  <div className="relative inline-block w-48 mt-8">
                    <select
                      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      onChange={(e) =>
                        setSelectedYear(parseInt(e.target.value))
                      }
                    >
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                        <path d="M10 12l-6-6h12l-6 6z" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="text-center m-5 mt-6">
                      <span className="text-2xl font-medium bg-emerald-400 p-3 rounded-lg">
                        PLAYER COMPARISON
                      </span>
                      <img
                        className="mt-7 mx-8"
                        src={vsImg}
                        alt="vs image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {player2 ? (
              <div className="bg-green-100 rounded-xl shadow-lg m-5 mt-2">
                <div className="PlayerbarRight">
                  <div className="PlayerbarItem">
                    <span className="PlayerbarTitle">{player2.name}</span>
                    <img
                      className="w-full h-auto"
                      src={Player2Img}
                      alt="player2 image"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-green-100 rounded-xl shadow-lg m-5 mt-2">
                <div className="PlayerbarRight">
                  <div className="PlayerbarItem">
                    <span className="PlayerbarTitle">Player 2</span>
                  </div>
                </div>
              </div>
            )}

            <div className="text-right flex flex-col">
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  {player1.name}
                </span>
              </div>
              <div className="m-5">
                  <span className=" p-2 rounded-lg shadow-2xl">
                    {player1.born}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">
                    {player1.age}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">
                    {player1.batting_style}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">
                    {player1.bowling_style}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">
                    {player1.playing_role}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">-</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">23.96</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">1270</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">133.68</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">15</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">-</span>
                </div>
            </div>
            <div>
            <div className="text-center flex flex-col">
              <div className="m-5">
                <span className=" p-2  bg-emerald-400 rounded-lg shadow-xl">
                  FULL NAME
                </span>
              </div>
              <div className="m-5">
                <span className=" p-2  bg-emerald-400 rounded-lg shadow-xl">
                  BORN
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  AGE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  BATTING STYLE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  BOWLING STYLE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  PLAYING ROLE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  WICKETS TAKEN
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  ECONOMY RATE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  RUN SCORED
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  STRIKE RATE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  BATTING RANKING
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  BOWLING RANKING
                </span>
              </div>

              {/* <h3 className="m-5  bg-red-100 rounded-lg shadow-2xl">
                FULL NAME
              </h3>
              <h3 className="m-5">BORN</h3>
              <h3 className="m-5">AGE</h3>
              <h3 className="m-5">BATTING STYLE</h3>
              <h3 className="m-5">BOWLING STYLE</h3>
              <h3 className="m-5">FIELD POSITION</h3>
              <h3 className="m-5">PLAYING ROLE</h3>
              <h3 className="m-5">AVERAGE</h3>
              <h3 className="m-5">ECONOMY RATE</h3>
              <h3 className="m-5">STRIKE RATE</h3>
              <h3 className="m-5">WICKETS TAKEN</h3>
              <h3 className="m-5">CATCHES TAKEN</h3> */}
            </div>
          </div>
            {player2 && (
              <div>
                <div className="text-left flex flex-col">
                  <div className="m-5">
                    <span className="p-2 rounded-lg shadow-2xl">
                      {player2.name}
                    </span>
                  </div>
                  <div className="m-5">
                  <span className=" p-2 rounded-lg shadow-2xl">
                    {player2.born}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">
                    {player2.age}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">
                    {player2.batting_style}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">
                    {player2.bowling_style}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">
                    {player2.playing_role}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">-</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">23.96</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">1270</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">133.68</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">15</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">-</span>
                </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
      
    </>
  );
};
