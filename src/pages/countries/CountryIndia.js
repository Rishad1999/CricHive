import React from "react";
import FlagImg from "../../assets/12.png";
import { Footer } from "../../components";
import "tailwindcss/tailwind.css";

import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// shadow-2xl mx-auto mt-5 rounded-lg h-auto w-90 lg:w-100 bg-gradient-to-r from-amber-500 to-green-500 flex flex-col justify-center items-center

export const CountryIndia = () => {
  const [player, setPlayer] = useState([]);
  //const playerRef = collection(db, "countryplayers");
  //let india = [];

  useEffect(() => {
    const countryPlayer = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(
        query(
          collection(db, "countryplayers"),
          where("country", "==", "India")
        )
      );

      querySnapshot.forEach((doc) => {
        let data = doc.data();

        setPlayer(data);
      });

      // const dataArray = querySnapshot.docs.map((doc) => doc.data());
      // setPlayer(dataArray);

      console.log("run", player.player1);
    };
    countryPlayer();
  }, []);

  return (
    <>
         

      <div class="shadow-xl rounded-lg mx-20 mt-5 mb-5 bg-gradient-to-r from-amber-500 to-green-500 flex flex-col justify-center items-center">
        <img
          src={FlagImg}
          alt="Player"
          class=" w-100 h-70 lg:w-100 lg:h-120 object-cover object-center"
        />
        <div class="mt-5 text-center">
          <h1 class="text-black-500 text-3xl lg:text-6xl font-bold mb-6">
            INDIA
          </h1>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg mx-20 mt-5 shadow-xl">
        <div className="bg-gradient-to-r from-gray-500 to-slate-300 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 font-medium">
          {/* {player.map((post) => (
            <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
              <h2 className="text-xl font-bold text-center">{post[0].player1}</h2>
            </div>
          ))} */}

          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2 className="text-xl font-bold text-center">{player.player1}</h2>
          </div>
          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2 className="text-xl font-bold text-center">{player.player2}</h2>
          </div>
          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2 className="text-xl font-bold text-center">{player.player3}</h2>
          </div>
          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2 className="text-xl font-bold text-center">{player.player4}</h2>
          </div>
          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2 className="text-xl font-bold text-center">{player.player5}</h2>
          </div>
          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2 className="text-xl font-bold text-center">{player.player6}</h2>
          </div>
          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2 className="text-xl font-bold text-center">
            {player.player7}
            </h2>
          </div>
          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2 className="text-xl font-bold text-center">{player.player8}</h2>
          </div>
          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2 className="text-xl font-bold text-center">{player.player9}</h2>
          </div>
          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2 className="text-xl font-bold text-center">{player.player10}</h2>
          </div>
          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2 className="text-xl font-bold text-center">{player.player11}</h2>
          </div>
          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
            <h2 className="text-xl font-bold text-center">{player.player12}</h2>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-500 to-slate-300 font-bold rounded-lg mx-20 mt-5 p-3 shadow-xl mt-10">
        <p className="text-center text-xl font-medium">
          Country wise Statistical Analysis
        </p>
      </div>

      {/* ////////////////////////// New Table */}

      <div className="shadow-xl rounded-lg mx-20 mt-5 mb-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Year
              </th>

              <th scope="col" className="px-6 py-3">
                Wins
              </th>
              <th scope="col" className="px-6 py-3">
                Losses
              </th>
              <th scope="col" className="px-6 py-3">
                Winning percentage
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Ranking
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Top run scorer
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Top wicket taker
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
                2020
              </th>
              <td className="px-6 py-4">25</td>
              <td className="px-6 py-4">25</td>
              <td className="px-6 py-4">50%</td>
              <td className="px-6 py-4 text-right">2</td>
              <td className="px-6 py-4 text-right">Virat Kohli</td>
              <td className="px-6 py-4 text-right">Jasprit Bumrah</td>
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
                2021
              </th>
              <td className="px-6 py-4">28</td>
              <td className="px-6 py-4">22</td>
              <td className="px-6 py-4">56%</td>
              <td className="px-6 py-4 text-right">1</td>
              <td className="px-6 py-4 text-right">Rohit sharma</td>
              <td className="px-6 py-4 text-right">Buvenehswar kumar</td>
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
                2022
              </th>
              <td className="px-6 py-4">31</td>
              <td className="px-6 py-4">30</td>
              <td className="px-6 py-4">51.67</td>
              <td className="px-6 py-4 text-right">3</td>
              <td className="px-6 py-4 text-right">Suryakumar yadav</td>
              <td className="px-6 py-4 text-right">Yuzvendra chahal</td>
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

      {/* //////////////////////////////////// */}

      <Footer />
    </>
  );
};
