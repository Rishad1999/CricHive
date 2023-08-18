import React from "react";
import FlagImg from "../../assets/countriesAssets/19.png";
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

export const CountryEng = () => {
  const [player, setPlayer] = useState([]);
  //const playerRef = collection(db, "countryplayers");
  //let india = [];
  const [numwin2020, setNumwin2020] = useState([]);
  const [numwin2021, setNumwin2021] = useState([]);
  const [numwin2022, setNumwin2022] = useState([]);

  const [numloss2020, setNumloss2020] = useState([]);
  const [numloss2021, setNumloss2021] = useState([]);
  const [numloss2022, setNumloss2022] = useState([]);

  let number_of_wins2020 = 0;
  let number_of_wins2021 = 0;
  let number_of_wins2022 = 0;

  let number_of_losses2020 = 0;
  let number_of_losses2021 = 0;
  let number_of_losses2022 = 0;

  useEffect(() => {
    const countryPlayer = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(
        query(collection(db, "countryplayers"), 
        where("country", "==", "India"))
      );

      querySnapshot.forEach((doc) => {
        let data = doc.data();

        setPlayer(data);
      });

      console.log("run", player.player1);
    };
    countryPlayer();
  }, []);

  useEffect(() => {
    const matchWin = async () => {
      const db = getFirestore();

      const querySnapshot1 = await getDocs(
        query(collection(db, "countrymatch"), 
        where("country", "==", "India"),
        where("year", "==", 2020),
        where("win_and_loss", "==", "Won"))
      );
      querySnapshot1.forEach((doc) => {
        number_of_wins2020++;
      });
      setNumwin2020(number_of_wins2020);

      const querySnapshot2 = await getDocs(
        query(collection(db, "countrymatch"), 
        where("country", "==", "India"),
        where("year", "==", 2021),
        where("win_and_loss", "==", "Won"))
      );
      querySnapshot2.forEach((doc) => {
        number_of_wins2021++;
      });
      setNumwin2021(number_of_wins2021);

      const querySnapshot3 = await getDocs(
        query(collection(db, "countrymatch"), 
        where("country", "==", "India"),
        where("year", "==", 2022),
        where("win_and_loss", "==", "Won"))
      );
      querySnapshot3.forEach((doc) => {
        number_of_wins2022++;
      });
      setNumwin2022(number_of_wins2022);

      const querySnapshot4 = await getDocs(
        query(collection(db, "countrymatch"), 
        where("country", "==", "India"),
        where("year", "==", 2020),
        where("win_and_loss", "==", "Loss"))
      );
      querySnapshot4.forEach((doc) => {
        number_of_losses2020++;
      });
      setNumloss2020(number_of_losses2020);

      const querySnapshot5 = await getDocs(
        query(collection(db, "countrymatch"), 
        where("country", "==", "India"),
        where("year", "==", 2021),
        where("win_and_loss", "==", "Loss"))
      );
      querySnapshot5.forEach((doc) => {
        number_of_losses2021++;
      });
      setNumloss2021(number_of_losses2021);

      const querySnapshot6 = await getDocs(
        query(collection(db, "countrymatch"), 
        where("country", "==", "India"),
        where("year", "==", 2022),
        where("win_and_loss", "==", "Loss"))
      );
      querySnapshot6.forEach((doc) => {
        number_of_losses2022++;
      });
      setNumloss2022(number_of_losses2022);
      
    };
    matchWin();
  }, []);

  
  return (
    <>
      <div class="shadow-xl rounded-lg mx-20 mt-5 mb-5 bg-gradient-to-r from-white to-red-500 flex flex-col justify-center items-center">
        <img
          src={FlagImg}
          alt="Player"
          class="w-30 h-40 lg:w-100 lg:h-120 object-cover object-center"
        />
        <div class="mt-5 text-center">
          <h1 class="text-black-500 text-3xl lg:text-6xl font-bold mb-6">
            ENGLAND
          </h1>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg mx-20 mt-5 shadow-xl">
        <div className="bg-gradient-to-r from-gray-500 to-slate-300 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 font-medium cursor-pointer">
          {/* {player.map((post) => (
            <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
              <h2 className="text-xl font-bold text-center">{post[0].player1}</h2>
            </div>
          ))} */}

          <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg ">
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
            <h2 className="text-xl font-bold text-center">{player.player7}</h2>
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
              <td className="px-6 py-4">{numwin2020}</td>
              <td className="px-6 py-4">{numloss2020}</td>
              <td className="px-6 py-4">{(((numwin2020)*100)/(numwin2020 + numloss2020)).toFixed(2)}%</td>
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
              <td className="px-6 py-4">{numwin2021}</td>
              <td className="px-6 py-4">{numloss2021}</td>
              <td className="px-6 py-4">{(((numwin2021)*100)/(numwin2021 + numloss2021)).toFixed(2)}%</td>
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
              <td className="px-6 py-4">{numwin2022}</td>
              <td className="px-6 py-4">{numloss2022}</td>
              <td className="px-6 py-4">{(((numwin2022)*100)/(numwin2022 + numloss2022)).toFixed(2)}%</td>
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