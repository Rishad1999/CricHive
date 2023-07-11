
import "./PlayerComparision.css";
import { SearchPlayer, Footer } from "../components";
import Player1Img from "../assets/8.png";
import Player2Img from "../assets/kholiProf.png";
import vsImg from "../assets/10.jpg";
import backgroundImage from "../assets/backgroundImage.jpg"; // Add the path to your background image

export const PlayerComparision = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div
          className="flex-grow bg-cover bg-center bg-opacity-50"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="grid grid-cols-3 gap-4 mx-20 mt-4">
            <div className="mr-6 ml-1">
              <SearchPlayer />
            </div>

            <div className=""></div>
            <div className="ml-6 mr-1">
              <SearchPlayer />
            </div>
          </div>

          <div className="mx-10 p-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-red-100 rounded-xl shadow-lg m-5 mt-2">
                <div className="PlayerbarLeft">
                  <div className="PlayerbarItem">
                    <span className="PlayerbarTitle">KUSAL MENDIS</span>
                    <img className="" src={Player1Img} alt="player1 image" />
                  </div>
                </div>
              </div>

              <div className="">
                <div className="">
                  <div className="flex flex-col items-center">
                    <div className="relative inline-block w-48 mt-8">
                      <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12l-6-6h12l-6 6z" />
                        </svg>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="text-center m-5 mt-6">
                      <span className="text-2xl font-medium bg-emerald-400 p-3 rounded-lg PlayerComparisonText">
                        PLAYER COMPARISION
                      </span>

                        <img className="mt-7 mx-8 PlayerComparisonText" src={vsImg} alt="vs image" />

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" bg-green-100 rounded-xl shadow-lg m-5 mt-2">
                <div className="PlayerbarRight">
                  <div className="PlayerbarItem">
                    <span className="PlayerbarTitle">VIRAT KOHLI</span>
                    <img
                      className="w-full h-auto"
                      src={Player2Img}
                      alt="player2 image"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
