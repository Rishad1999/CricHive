// import { useState } from "react";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import PlayerImg from "../assets/dhoni.png";
import { TableStat, Footer, SearchPlayer } from "../components";
import "tailwindcss/tailwind.css";

import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";
import photo9 from "../assets/photo9.jpg";
import photo10 from "../assets/photo10.jpg";

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export const PlayerProfile = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const [results, setResults] = useState([]);

  const [totalruns2020, setTotalruns2020] = useState([]);
  const [totalruns2021, setTotalruns2021] = useState([]);
  const [totalruns2022, setTotalruns2022] = useState([]);
  const [batcount2020, setBatcount2020] = useState([]);
  const [batcount2021, setBatcount2021] = useState([]);
  const [batcount2022, setBatcount2022] = useState([]);
  const [avgstrikeRate2020, setAvgstrikeRate2020] = useState([]);
  const [avgstrikeRate2021, setAvgstrikeRate2021] = useState([]);
  const [avgstrikeRate2022, setAvgstrikeRate2022] = useState([]);

  // const [count, setCount] = useState();
  const [wicket2020, setWicket2020] = useState();
  const [wicket2021, setWicket2021] = useState();
  const [wicket2022, setWicket2022] = useState();
  const [bowcount2020, setBowcount2020] = useState([]);
  const [bowcount2021, setBowcount2021] = useState([]);
  const [bowcount2022, setBowcount2022] = useState([]);
  const [avgeconomyRate2020, setAvgeconomyRate2020] = useState([]);
  const [avgeconomyRate2021, setAvgeconomyRate2021] = useState([]);
  const [avgeconomyRate2022, setAvgeconomyRate2022] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % 10);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
  ];
  const handleSwipe = (selectedIndex) => {
    setCurrentPhoto(selectedIndex);
  };

  // const [bowcount, setBowcount] = useState();

  const handleSearchResults = (searchResults) => {
    console.log("Search45", searchResults[0]);
    setResults(searchResults[0]);
    console.log(searchResults[0].full_name);

    tableSearch(searchResults);
  };

  let runs2020 = 0;
  let runs2021 = 0;
  let runs2022 = 0;
  let batMatchCount2020 = 0;
  let batMatchCount2021 = 0;
  let batMatchCount2022 = 0;
  let strikeRate2020 = 0;
  let strikeRate2021 = 0;
  let strikeRate2022 = 0;

  let wic2020 = 0;
  let wic2021 = 0;
  let wic2022 = 0;
  let bowMatchCount2020 = 0;
  let bowMatchCount2021 = 0;
  let bowMatchCount2022 = 0;
  let economyRate2020 = 0;
  let economyRate2021 = 0;
  let economyRate2022 = 0;

  var count = 0;
  let wic = 0;
  let bowcount = 0;

  const tableSearch = async (searchResults) => {
    try {
      console.log(searchResults[0].name);

      const db = getFirestore();

      const querySnapshot1 = await getDocs(
        query(
          collection(db, "Batting"),
          where("name", "==", searchResults[0].name),
          where("year", "==", 2020)
        )
      );
      const querySnapshot2 = await getDocs(
        query(
          collection(db, "Batting"),
          where("name", "==", searchResults[0].name),
          where("year", "==", 2021)
        )
      );
      const querySnapshot3 = await getDocs(
        query(
          collection(db, "Batting"),
          where("name", "==", searchResults[0].name),
          where("year", "==", 2022)
        )
      );

      const querySnapshot4 = await getDocs(
        query(
          collection(db, "Bowling"),
          where("name", "==", searchResults[0].name),
          where("year", "==", 2020)
        )
      );
      const querySnapshot5 = await getDocs(
        query(
          collection(db, "Bowling"),
          where("name", "==", searchResults[0].name),
          where("year", "==", 2021)
        )
      );
      const querySnapshot6 = await getDocs(
        query(
          collection(db, "Bowling"),
          where("name", "==", searchResults[0].name),
          where("year", "==", 2022)
        )
      );

      querySnapshot1.forEach((doc) => {
        const data = doc.data();
        runs2020 += data.runs;
        batMatchCount2020++;
      });
      setTotalruns2020(runs2020);
      setBatcount2020(batMatchCount2020);

      querySnapshot2.forEach((doc) => {
        const data = doc.data();
        runs2021 += data.runs;
        batMatchCount2021++;
      });
      setTotalruns2021(runs2021);
      setBatcount2021(batMatchCount2021);

      querySnapshot3.forEach((doc) => {
        const data = doc.data();
        runs2022 += data.runs;
        batMatchCount2022++;
      });
      setTotalruns2022(runs2022);
      setBatcount2022(batMatchCount2022);

      querySnapshot4.forEach((doc) => {
        const data = doc.data();
        wic2020 += data.wickets;
        bowMatchCount2020++;
      });
      setWicket2020(wic2020);
      setBowcount2020(bowMatchCount2020);

      querySnapshot5.forEach((doc) => {
        const data = doc.data();
        wic2021 += data.wickets;
        bowMatchCount2021++;
      });
      setWicket2021(wic2021);
      setBowcount2021(bowMatchCount2021);

      querySnapshot6.forEach((doc) => {
        const data = doc.data();
        wic2022 += data.wickets;
        bowMatchCount2022++;
      });
      setWicket2022(wic2022);
      setBowcount2022(bowMatchCount2022);

      querySnapshot1.forEach((doc) => {
        const data = doc.data();
        strikeRate2020 += data.strike_rate;
        //bowMatchCount2022++;
      });
      setAvgstrikeRate2020(strikeRate2020);

      querySnapshot2.forEach((doc) => {
        const data = doc.data();
        strikeRate2021 += data.strike_rate;
        //bowMatchCount2022++;
      });
      setAvgstrikeRate2021(strikeRate2021);

      querySnapshot3.forEach((doc) => {
        const data = doc.data();
        strikeRate2022 += data.strike_rate;
        //bowMatchCount2022++;
      });
      setAvgstrikeRate2022(strikeRate2022);

      querySnapshot4.forEach((doc) => {
        const data = doc.data();
        economyRate2020 += data.economy_rate;
      });
      setAvgeconomyRate2020(economyRate2020);

      querySnapshot5.forEach((doc) => {
        const data = doc.data();
        economyRate2021 += data.economy_rate;
      });
      setAvgeconomyRate2021(economyRate2021);

      querySnapshot6.forEach((doc) => {
        const data = doc.data();
        economyRate2022 += data.economy_rate;
      });
      setAvgeconomyRate2022(economyRate2022);

      // console.log(`Hi ${sum}`);
      // console.log(count);
      // console.log(sum / count);

      // //setTotalWickets(wicket);
      // console.log(wicket);
      // console.log(bowcount);
      // console.log(wicket / bowcount);
      //const snapshot = await db.collection('').get();
      //const items = snapshot.docs.map((doc) => doc.data());
      //setData(items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (results.length !== 0) {
    return (
      <>
        <div className="mx-20 mt-5 rounded-lg">
          <SearchPlayer onSearchResults={handleSearchResults} />
        </div>
        {/* Access and display the search results */}

        {/* {results.map((result) => ( */}
        <div key={results.id}>
          {/* <p>Name: {result.name}</p> */}

          <div class="shadow-2xl mx-20 mt-5 rounded-lg h-32 sm:h-48 md:h-64 lg:h-96 bg-gradient-to-r from-gray-500 to-slate-300 relative ...">
            <div className="absolute bottom-0 left-0 ml-10 mb-10">
              <h1 className="text-white text-4xl">{results.full_name}</h1>
              <p className="text-white text-3xl">
                {/* India <span>| {result.playing_role}</span> */}
                <span>{results.playing_role}</span>
              </p>
            </div>
            <div class="w-60 absolute bottom-0 right-10 ...">
              {/* <img src={PlayerImg} alt="Logo" /> */}
              <img src={results.image} alt="Logo" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-500 to-slate-300 rounded-lg mx-20 mt-5 shadow-xl">
            <div class="grid grid-cols-3 gap-4 font-medium">
              <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
                <h2>FULL NAME</h2>
                <p>{results.full_name}</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
                <h2>Born</h2>
                <p>{results.born}</p>
              </div>
              <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
                <h2>AGE</h2>
                <p>{results.age}</p>
              </div>
              <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
                <h2>HIGHEST RUNS</h2>
                <p>{results.highest_runs}</p>
              </div>
              <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
                <h2>BATTING STYLE</h2>
                <p>{results.batting_style}</p>
              </div>
              <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
                <h2>BOWLING STYLE</h2>
                <p>{results.bowling_style}</p>
              </div>
              <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
                <h2>FIELDING POSITION</h2>
                <p>{results.fielding_position}</p>
              </div>
              <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
                <h2>PLAYING ROLE</h2>
                <p>{results.playing_role}</p>
              </div>
              <div className="p-4  bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
                <h2>ALSO KNOWN AS</h2>
                <p>{results.also_known_as}</p>
              </div>
            </div>
          </div>

          {/* Other fields */}
        </div>
        {/* ))} */}

        <div className="bg-gradient-to-r from-gray-500 to-slate-300 rounded-lg mx-20 mt-5 p-3 shadow-xl">
          <p className="text-center font-medium">
            Player Batting Statistics Analysis
          </p>
        </div>

        <div className="shadow-xl rounded-lg mx-20 mt-5 mb-5">
          {/* <TableStat /> */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Year
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Matches
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Runs
                  </th>
                  <th scope="col" className="px-6 py-3">
                    AVERAGE
                  </th>
                  <th scope="col" className="px-6 py-3 text-right">
                    Strike Rate
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
                  <td className="px-6 py-4">{batcount2020}</td>
                  <td className="px-6 py-4">{totalruns2020}</td>
                  <td className="px-6 py-4">
                    {(totalruns2020 / batcount2020).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {(avgstrikeRate2020 / batcount2020).toFixed(2)}
                  </td>
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
                  <td className="px-6 py-4">{batcount2021}</td>
                  <td className="px-6 py-4">{totalruns2021}</td>
                  <td className="px-6 py-4">
                    {(totalruns2021 / batcount2021).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {(avgstrikeRate2021 / batcount2021).toFixed(2)}
                  </td>
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
                  <td className="px-6 py-4">{batcount2022}</td>
                  <td className="px-6 py-4">{totalruns2022}</td>
                  <td className="px-6 py-4">
                    {(totalruns2022 / batcount2022).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {(avgstrikeRate2022 / batcount2022).toFixed(2)}
                  </td>
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
                    {/* Runs Given */}
                    Wickets Per Match
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
                    2020
                  </th>
                  <td className="px-6 py-4">{bowcount2020}</td>
                  <td className="px-6 py-4">{wicket2020}</td>
                  <td className="px-6 py-4">
                    {(wicket2020 / bowcount2020).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {(avgeconomyRate2020 / bowcount2020).toFixed(2)}
                  </td>
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
                  <td className="px-6 py-4">{bowcount2021}</td>
                  <td className="px-6 py-4">{wicket2021}</td>
                  <td className="px-6 py-4">
                    {(wicket2021 / batcount2021).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {(avgeconomyRate2021 / bowcount2021).toFixed(2)}
                  </td>
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
                  <td className="px-6 py-4">{batcount2022}</td>
                  <td className="px-6 py-4">{wicket2022}</td>
                  <td className="px-6 py-4">
                    {(wicket2022 / batcount2022).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {(avgeconomyRate2022 / bowcount2022).toFixed(2)}
                  </td>
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
  }

  ////////////////////////////////
  return (
    <>
      <div className="mx-20 mt-5 rounded-lg">
        <SearchPlayer onSearchResults={handleSearchResults} />
      </div>

      <div className="relative mt-5 w-full">
        <Carousel
          selectedItem={currentPhoto}
          onChange={handleSwipe}
          autoPlay
          infiniteLoop
          interval={5000}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          emulateTouch
          swipeable
        >
          {photos.map((photo, index) => (
            <div key={index}>
              <img src={photo} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>

        <div className="absolute top-0 left-0 right-0 flex justify-center mt-2">
          {photos.map((_, index) => (
            <div
              key={index}
              className={`${
                index === currentPhoto ? "bg-indigo-500" : "bg-indigo-200"
              } h-2 w-2 mx-1 rounded-full cursor-pointer`}
              onClick={() => setCurrentPhoto(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};