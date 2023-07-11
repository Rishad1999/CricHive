import PlayerImg from "../assets/dhoni.png";
import { TableStat, Footer, SearchPlayer } from "../components";
import "tailwindcss/tailwind.css";

export const PlayerProfile = () => {
  return (
    <>
      <div className="mx-20 mt-5 rounded-lg">
        <SearchPlayer />
      </div>

      <div class="shadow-2xl mx-20 mt-5 rounded-lg h-32 sm:h-48 md:h-64 lg:h-96 bg-gradient-to-r from-gray-500 to-slate-300 relative ...">
        <div className="absolute bottom-0 left-0 ml-10 mb-10">
          <h1 className="text-white text-4xl">M.S. Dhoni</h1>
          <p className="text-white text-3xl">
            India <span>| Wicket Keeper</span>
          </p>
        </div>
        <div class="w-60 absolute bottom-0 right-10 ...">
          <img src={PlayerImg} alt="Logo" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-500 to-slate-300 rounded-lg mx-20 mt-5 shadow-xl">
        <div class="grid grid-cols-3 gap-4 font-medium">
          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>FULL NAME</h2>
            <p>Mahendra Singh Dhoni</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>BORN</h2>
            <p>July 07, 1981, Ranchi, Bihar</p>
          </div>
          <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>AGE</h2>
            <p>41y 240d</p>
          </div>
          <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>HIGHEST RUNS</h2>
            <p>102*</p>
          </div>
          <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>BATTING STYLE</h2>
            <p>Right hand Bat</p>
          </div>
          <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>BOWLING STYLE</h2>
            <p>Right arm Medium</p>
          </div>
          <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>FIELDING POSITION</h2>
            <p>Wicketkeeper</p>
          </div>
          <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>PLAYING ROLE</h2>
            <p>Wicketkeeper Batter</p>
          </div>
          <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2>ALSO KNOWN AS</h2>
            <p>Mahi</p>
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
                {/* <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th> */}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2019
                </th>
                <td className="px-6 py-4">6</td>
                <td className="px-6 py-4">13</td>
                <td className="px-6 py-4">240</td>
                <td className="px-6 py-4 text-right">6.8</td>
                {/* <td className="px-6 py-4 text-right">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td> */}
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2018
                </th>
                <td className="px-6 py-4">5</td>
                <td className="px-6 py-4">20</td>
                <td className="px-6 py-4">100</td>
                <td className="px-6 py-4 text-right">4.7</td>
                {/* <td className="px-6 py-4 text-right">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td> */}
              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2017
                </th>
                <td className="px-6 py-4">9</td>
                <td className="px-6 py-4">30</td>
                <td className="px-6 py-4">560</td>
                <td className="px-6 py-4 text-right">5.4</td>
                {/* <td className="px-6 py-4 text-right">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};
