import { useEffect, useState } from "react";
import { SearchPlayer, Footer } from "../components";
//import { MySearch, Footer } from "../components";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import Player1Img from "../assets/8.png";
import Player2Img from "../assets/kholiProf.png";
import vsImg from "../assets/10.jpg";

export const PlayerComparision = () => {
  const [results, setResults] = useState([]);
  const [results1, setResults1] = useState([]);
  const [wicket, setWicket] = useState();
  const [count, setCount] = useState();

  const [selectedYear, setSelectedYear] = useState();

  const handleSearchResults = (searchResults) => {
    console.log("Search", searchResults);
    setResults(searchResults);
    //setResults1(searchResults);
    //compareFromBatBowl(searchResults);
  };

  const handleSearchResults1 = (searchResults) => {
    console.log("Search", searchResults);
    //setResults(searchResults);
    setResults1(searchResults);
  };

  // useEffect(() => {
  //   handleSearchResults(results); // Pass the desired results array
  //   //handleSearchResults1(results1); // Pass the desired results1 array
  // }, [selectedYear]);

  // let wic = 0;
  // let mcount = 0;

  // const compareFromBatBowl = async (searchResults) => {
  //   try {
  //     console.log(searchResults[0].full_name);
  //     console.log("year", selectedYear);
  //     setWicket(0);
  //     setCount(0);
  //     const db = getFirestore();
  //     // const querySnapshot1 = await getDocs(
  //     //   query(
  //     //     collection(db, "Batting"),
  //     //     where("name", "==", searchResults[0].full_name),
  //     //     where("Year", "==", 2021)
  //     //   )
  //     // );
  //     const querySnapshot2 = await getDocs(
  //       query(
  //         collection(db, "Bowling"),
  //         where("name", "==", searchResults[0].full_name),
  //         where("year", "==", selectedYear)
  //       )
  //     );

  //     // querySnapshot1.forEach((doc) => {
  //     //   const data = doc.data();
  //     //   sum += data.Runs;
  //     //   count++;
  //     // });
  //     // setTotalruns(sum);
  //     // console.log("run", sum);

  //     querySnapshot2.forEach((doc) => {
  //       const data = doc.data();
  //       wic += data.wickets;
  //       mcount++;
  //     });
  //     setWicket(wic);
  //     setCount(mcount);

  //     wic = 0;
  //     mcount = 0;

  //     //setTotalWickets(wicket);
  //     console.log(wicket);
  //     console.log(count);
  //     console.log(wicket / count);
  //     //const snapshot = await db.collection('').get();
  //     //const items = snapshot.docs.map((doc) => doc.data());
  //     //setData(items);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // const compareFromBatBowl = async (searchResults) => {
  //   try {
  //     const db = getFirestore();
  //     const battingQuery = query(
  //       collection(db, "Bowling"),
  //       where("name", "==", searchResults[0].full_name),
  //       where("year", "==", selectedYear)
  //     );
  //     // const bowlingQuery = query(
  //     //   collection(db, "Bowling"),
  //     //   where("Name", "==", "Trent Boult"),
  //     //   where("Year", "==", selectedYear)
  //     // );

  //     //const querySnapshot1 = await getDocs(battingQuery);
  //     const querySnapshot2 = await getDocs(battingQuery);

  //     // let sum = 0;
  //     // let count = 0;
  //     // querySnapshot1.forEach((doc) => {
  //     //   const data = doc.data();
  //     //   sum += data.Runs;
  //     //   count++;
  //     // });
  //     // setWicket(sum);
  //     // console.log("run", sum);
  //     // console.log(count);
  //     // console.log(sum / count);

  //     let wic = 0;
  //     let mcount = 0;
  //     querySnapshot2.forEach((doc) => {
  //       const data = doc.data();
  //       wic += data.wickets;
  //       mcount++;
  //     });
  //     setWicket(wic)
  //     setCount(mcount)

  //     console.log(wicket);
  //     console.log(count);
  //     console.log(wicket / count);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  return (
    <>
      <div class="grid grid-cols-3 gap-4 mx-20 mt-4">
        <div className="mr-6 ml-1">
          <SearchPlayer onSearchResults={handleSearchResults} />
        </div>

        <div className=""></div>
        <div className="ml-6 mr-1">
          <SearchPlayer onSearchResults={handleSearchResults1} />
        </div>
      </div>

      <div className="mx-10 p-6">
        <div className="grid grid-cols-3 gap-4">
          {results.map((result) => (
            <div className="bg-red-100 rounded-xl shadow-lg m-5 mt-2">
              <div className="PlayerbarLeft">
                <div className="PlayerbarItem">
                  <span className="PlayerbarTitle">{result.name}</span>
                  <img className="" src={Player1Img} alt="player1 image" />
                </div>
              </div>
            </div>
          ))}

          <div className="">
            <div className="">
              <div class="flex flex-col items-center">
                <div class="relative inline-block w-48 mt-8">
                  {/* <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="1">2022</option>
                    <option value="2">2021</option>
                    <option value="3">2020</option>
                  </select> */}

                  <select
                    class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                  >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                  </select>

                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                      <path d="M10 12l-6-6h12l-6 6z" />
                    </svg>
                  </div>
                </div>

                <div class="mt-8">
                  <div className="text-center m-5 mt-6">
                    <span className="text-2xl font-medium bg-emerald-400 p-3 rounded-lg">
                      PLAYER COMPARISION
                    </span>
                    <img className="mt-7 mx-8" src={vsImg} alt="vs image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {results1.map((result) => (
            <div className=" bg-green-100 rounded-xl shadow-lg m-5 mt-2">
              <div className="PlayerbarRight">
                <div className="PlayerbarItem">
                  <span className="PlayerbarTitle">{result.name}</span>
                  <img
                    className="w-full h-auto"
                    src={Player2Img}
                    alt="player2 image"
                  />
                </div>
              </div>
            </div>
          ))}

          {results.map((result) => (
            <div className="">
              <div className="text-right flex flex-col">
                <div className="m-5">
                  <span className=" p-2 rounded-lg shadow-2xl">
                    {result.name}
                  </span>
                </div>
                <div className="m-5">
                  <span className=" p-2 rounded-lg shadow-2xl">
                    {result.born}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">
                    {result.age}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">
                    {result.batting_style}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">
                    {result.bowling_style}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">
                    {result.playing_role}
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
          ))}

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

          {results1.map((result) => (
            <div>
              <div className="text-left flex flex-col">
                <div className="m-5">
                  <span className=" p-2  rounded-lg shadow-2xl">
                    {result.name}
                  </span>
                </div>
                <div className="m-5">
                  <span className=" p-2 rounded-lg shadow-2xl">
                    {result.born}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">
                    {result.age}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">
                    {result.batting_style}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">
                    {result.bowling_style}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">
                    {result.playing_role}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">-</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">52.73</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">4008</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">137.96</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">3</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">-</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};
