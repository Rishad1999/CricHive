import { useEffect, useState } from "react";
import "./PlayerComparision.css";
import { SearchPlayer, Footer } from "../components";
import Player1Img from "../assets/8.png";
import Player2Img from "../assets/kholiProf.png";
import vsImg from "../assets/homepageAssets/15.png";
import fight from "../assets/fight.jpg";

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from "firebase/firestore";

export const PlayerComparision = () => {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);

  const [resultsP1, setResultsP1] = useState([]);
  const [resultsP2, setResultsP2] = useState([]);

  const [totalruns, setTotalruns] = useState([]);
  const [totalruns2020, setTotalruns2020] = useState([]);
  const [totalruns2021, setTotalruns2021] = useState([]);
  const [totalruns2022, setTotalruns2022] = useState([]);
  const [batcount, setBatcount] = useState([]);
  const [batcount2020, setBatcount2020] = useState([]);
  const [batcount2021, setBatcount2021] = useState([]);
  const [batcount2022, setBatcount2022] = useState([]);  
  const [avgstrikeRate, setAvgstrikeRate] = useState([]);
  const [avgstrikeRate2020, setAvgstrikeRate2020] = useState([]);
  const [avgstrikeRate2021, setAvgstrikeRate2021] = useState([]);
  const [avgstrikeRate2022, setAvgstrikeRate2022] = useState([]);
  
  const [wicket, setWicket] = useState();
  const [wicket2020, setWicket2020] = useState();
  const [wicket2021, setWicket2021] = useState();
  const [wicket2022, setWicket2022] = useState();
  const [bowcount, setBowcount] = useState([]);
  const [bowcount2020, setBowcount2020] = useState([]);
  const [bowcount2021, setBowcount2021] = useState([]);
  const [bowcount2022, setBowcount2022] = useState([]);
  const [avgeconomyRate, setAvgeconomyRate] = useState([]);
  const [avgeconomyRate2020, setAvgeconomyRate2020] = useState([]);
  const [avgeconomyRate2021, setAvgeconomyRate2021] = useState([]);
  const [avgeconomyRate2022, setAvgeconomyRate2022] = useState([]);
  console.log("data", player1);

  const [p2totalruns, p2setTotalruns] = useState([]);
  const [p2totalruns2020, p2setTotalruns2020] = useState([]);
  const [p2totalruns2021, p2setTotalruns2021] = useState([]);
  const [p2totalruns2022, p2setTotalruns2022] = useState([]);
  const [p2batcount, p2setBatcount] = useState([]);
  const [p2batcount2020, p2setBatcount2020] = useState([]);
  const [p2batcount2021, p2setBatcount2021] = useState([]);
  const [p2batcount2022, p2setBatcount2022] = useState([]);  
  const [p2avgstrikeRate, p2setAvgstrikeRate] = useState([]);
  const [p2avgstrikeRate2020, p2setAvgstrikeRate2020] = useState([]);
  const [p2avgstrikeRate2021, p2setAvgstrikeRate2021] = useState([]);
  const [p2avgstrikeRate2022, p2setAvgstrikeRate2022] = useState([]);
  
  const [p2wicket, p2setWicket] = useState();
  const [p2wicket2020, p2setWicket2020] = useState();
  const [p2wicket2021, p2setWicket2021] = useState();
  const [p2wicket2022, p2setWicket2022] = useState();
  const [p2bowcount, p2setBowcount] = useState([]);
  const [p2bowcount2020, p2setBowcount2020] = useState([]);
  const [p2bowcount2021, p2setBowcount2021] = useState([]);
  const [p2bowcount2022, p2setBowcount2022] = useState([]);
  const [p2avgeconomyRate, p2setAvgeconomyRate] = useState([]);
  const [p2avgeconomyRate2020, p2setAvgeconomyRate2020] = useState([]);
  const [p2avgeconomyRate2021, p2setAvgeconomyRate2021] = useState([]);
  const [p2avgeconomyRate2022, p2setAvgeconomyRate2022] = useState([]);

  
  const [selectedYear, setSelectedYear] = useState();
  
  
  
  console.log("Wow", selectedYear);

  let p1runs2020 = 0;
  let p1runs2021 = 0;
  let p1runs2022 = 0;
  let p1batMatchCount2020 = 0;
  let p1batMatchCount2021 = 0;
  let p1batMatchCount2022 = 0;
  let p1strikeRate2020 = 0;
  let p1strikeRate2021 = 0;
  let p1strikeRate2022 = 0;

  let p1wic2020 = 0;
  let p1wic2021 = 0;
  let p1wic2022 = 0;
  let p1bowMatchCount2020 = 0;
  let p1bowMatchCount2021 = 0;
  let p1bowMatchCount2022 = 0;
  let p1economyRate2020 = 0;
  let p1economyRate2021 = 0;
  let p1economyRate2022 = 0;

  //////////////////////////////////////////

  let p2runs2020 = 0;
  let p2runs2021 = 0;
  let p2runs2022 = 0;
  let p2batMatchCount2020 = 0;
  let p2batMatchCount2021 = 0;
  let p2batMatchCount2022 = 0;
  let p2strikeRate2020 = 0;
  let p2strikeRate2021 = 0;
  let p2strikeRate2022 = 0;

  let p2wic2020 = 0;
  let p2wic2021 = 0;
  let p2wic2022 = 0;
  let p2bowMatchCount2020 = 0;
  let p2bowMatchCount2021 = 0;
  let p2bowMatchCount2022 = 0;
  let p2economyRate2020 = 0;
  let p2economyRate2021 = 0;
  let p2economyRate2022 = 0;

  const handleSearchResults = (searchResults) => {
    setPlayer1(searchResults[0]);
    tableSearch1(searchResults[0]);
  };

  const handleSearchResults1 = (searchResults) => {
    setPlayer2(searchResults[0]);
    tableSearch2(searchResults[0]);
  };

  const tableSearch1 = async (searchResults) => {
    try {
      console.log(searchResults.name);
      setResultsP1(searchResults);
      console.log(resultsP1.image);
      const db = getFirestore();

      const querySnapshot1 = await getDocs(
        query(
          collection(db, "Batting"),
          where("name", "==", searchResults.name),
          where("year", "==", 2020)
        )
      );
      const querySnapshot2 = await getDocs(
        query(
          collection(db, "Batting"),
          where("name", "==", searchResults.name),
          where("year", "==", 2021)
        )
      );
      const querySnapshot3 = await getDocs(
        query(
          collection(db, "Batting"),
          where("name", "==", searchResults.name),
          where("year", "==", 2022)
        )
      );
      const querySnapshot4 = await getDocs(
        query(
          collection(db, "Bowling"),
          where("name", "==", searchResults.name),
          where("year", "==", 2020)
        )
      );
      const querySnapshot5 = await getDocs(
        query(
          collection(db, "Bowling"),
          where("name", "==", searchResults.name),
          where("year", "==", 2021)
        )
      );
      const querySnapshot6 = await getDocs(
        query(
          collection(db, "Bowling"),
          where("name", "==", searchResults.name),
          where("year", "==", 2022)
        )
      );
      

      querySnapshot1.forEach((doc) => {
        const data = doc.data();
        p1runs2020 += data.runs;
        p1batMatchCount2020++;
      });
      setTotalruns2020(p1runs2020);
      setBatcount2020(p1batMatchCount2020);

      

      querySnapshot2.forEach((doc) => {
        const data = doc.data();
        p1runs2021 += data.runs;
        p1batMatchCount2021++;
      });
      setTotalruns2021(p1runs2021);
      setBatcount2021(p1batMatchCount2021);

      console.log("pl12021bat", batcount2021);

      querySnapshot3.forEach((doc) => {
        const data = doc.data();
        p1runs2022 += data.runs;
        p1batMatchCount2022++;
      });
      setTotalruns2022(p1runs2022);
      setBatcount2022(p1batMatchCount2022);

      console.log("pl12022bat", batcount2022);

      querySnapshot1.forEach((doc) => {
        const data = doc.data();
        p1strikeRate2020 += data.strike_rate;
        //bowMatchCount2022++;
      });
      setAvgstrikeRate2020(p1strikeRate2020);

      querySnapshot2.forEach((doc) => {
        const data = doc.data();
        p1strikeRate2021 += data.strike_rate;
        //bowMatchCount2022++;
      });
      setAvgstrikeRate2021(p1strikeRate2021);

      querySnapshot3.forEach((doc) => {
        const data = doc.data();
        p1strikeRate2022 += data.strike_rate;
        //bowMatchCount2022++;
      });
      setAvgstrikeRate2022(p1strikeRate2022);

      console.log("pl12022strike", avgstrikeRate2022);

      querySnapshot4.forEach((doc) => {
        const data = doc.data();
        p1wic2020 += data.wickets;
        p1bowMatchCount2020++;
      });
      setWicket2020(p1wic2020);
      setBowcount2020(p1bowMatchCount2020);

      querySnapshot5.forEach((doc) => {
        const data = doc.data();
        p1wic2021 += data.wickets;
        p1bowMatchCount2021++;
      });
      setWicket2021(p1wic2021);
      setBowcount2021(p1bowMatchCount2021);

      console.log("pl12021bow", bowcount2021);

      querySnapshot6.forEach((doc) => {
        const data = doc.data();
        p1wic2022 += data.wickets;
        p1bowMatchCount2022++;
      });
      setWicket2022(p1wic2022);
      setBowcount2022(p1bowMatchCount2022);

      console.log("pl12022bow", bowcount2022);

      querySnapshot4.forEach((doc) => {
        const data = doc.data();
        p1economyRate2020 += data.economy_rate;
      });
      setAvgeconomyRate2020(p1economyRate2020);

      querySnapshot5.forEach((doc) => {
        const data = doc.data();
        p1economyRate2021 += data.economy_rate;
      });
      setAvgeconomyRate2021(p1economyRate2021);

      querySnapshot6.forEach((doc) => {
        const data = doc.data();
        p1economyRate2022 += data.economy_rate;
      });
      setAvgeconomyRate2022(p1economyRate2022);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };

  //////////////////////////////////////////////////////////

  const tableSearch2 = async (searchResults) => {
    try {
      console.log(searchResults.name);
      setResultsP2(searchResults);

      const db = getFirestore();

      const querySnapshot1 = await getDocs(
        query(
          collection(db, "Batting"),
          where("name", "==", searchResults.name),
          where("year", "==", 2020)
        )
      );
      const querySnapshot2 = await getDocs(
        query(
          collection(db, "Batting"),
          where("name", "==", searchResults.name),
          where("year", "==", 2021)
        )
      );
      const querySnapshot3 = await getDocs(
        query(
          collection(db, "Batting"),
          where("name", "==", searchResults.name),
          where("year", "==", 2022)
        )
      );
      const querySnapshot4 = await getDocs(
        query(
          collection(db, "Bowling"),
          where("name", "==", searchResults.name),
          where("year", "==", 2020)
        )
      );
      const querySnapshot5 = await getDocs(
        query(
          collection(db, "Bowling"),
          where("name", "==", searchResults.name),
          where("year", "==", 2021)
        )
      );
      const querySnapshot6 = await getDocs(
        query(
          collection(db, "Bowling"),
          where("name", "==", searchResults.name),
          where("year", "==", 2022)
        )
      );
      

      querySnapshot1.forEach((doc) => {
        const data = doc.data();
        p2runs2020 += data.runs;
        p2batMatchCount2020++;
      });
      p2setTotalruns2020(p2runs2020);
      p2setBatcount2020(p2batMatchCount2020);

      querySnapshot2.forEach((doc) => {
        const data = doc.data();
        p2runs2021 += data.runs;
        p2batMatchCount2021++;
      });
      p2setTotalruns2021(p2runs2021);
      p2setBatcount2021(p2batMatchCount2021);

      querySnapshot3.forEach((doc) => {
        const data = doc.data();
        p2runs2022 += data.runs;
        p2batMatchCount2022++;
      });
      p2setTotalruns2022(p2runs2022);
      p2setBatcount2022(p2batMatchCount2022);

      querySnapshot1.forEach((doc) => {
        const data = doc.data();
        p2strikeRate2020 += data.strike_rate;
        //bowMatchCount2022++;
      });
      p2setAvgstrikeRate2020(p2strikeRate2020);

      querySnapshot2.forEach((doc) => {
        const data = doc.data();
        p2strikeRate2021 += data.strike_rate;
        //bowMatchCount2022++;
      });
      p2setAvgstrikeRate2021(p2strikeRate2021);

      querySnapshot3.forEach((doc) => {
        const data = doc.data();
        p2strikeRate2022 += data.strike_rate;
        //bowMatchCount2022++;
      });
      p2setAvgstrikeRate2022(p2strikeRate2022);

      querySnapshot4.forEach((doc) => {
        const data = doc.data();
        p2wic2020 += data.wickets;
        p2bowMatchCount2020++;
      });
      p2setWicket2020(p2wic2020);
      p2setBowcount2020(p2bowMatchCount2020);

      querySnapshot5.forEach((doc) => {
        const data = doc.data();
        p2wic2021 += data.wickets;
        p2bowMatchCount2021++;
      });
      p2setWicket2021(p2wic2021);
      p2setBowcount2021(p2bowMatchCount2021);

      querySnapshot6.forEach((doc) => {
        const data = doc.data();
        p2wic2022 += data.wickets;
        p2bowMatchCount2022++;
      });
      p2setWicket2022(p2wic2022);
      p2setBowcount2022(p2bowMatchCount2022);

      querySnapshot4.forEach((doc) => {
        const data = doc.data();
        p2economyRate2020 += data.economy_rate;
      });
      p2setAvgeconomyRate2020(p2economyRate2020);

      querySnapshot5.forEach((doc) => {
        const data = doc.data();
        p2economyRate2021 += data.economy_rate;
      });
      p2setAvgeconomyRate2021(p2economyRate2021);

      querySnapshot6.forEach((doc) => {
        const data = doc.data();
        p2economyRate2022 += data.economy_rate;
      });
      p2setAvgeconomyRate2022(p2economyRate2022);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };

  

  useEffect(() => {
    if (selectedYear === 2020) {
      setWicket2020(wicket2020);
      setBowcount2020(bowcount2020);
      setAvgeconomyRate2020(avgeconomyRate2020);
      setTotalruns2020(totalruns2020);
      setBowcount2020(batcount2020);
      setAvgstrikeRate2020(avgstrikeRate2020);
    } else if (selectedYear === 2021) {
      setWicket2020(wicket2021);
      setBowcount2020(bowcount2021);
      setAvgeconomyRate2020(avgeconomyRate2021);
      setTotalruns2020(totalruns2021);
      setBowcount2020(batcount2021);
      setAvgstrikeRate2020(avgstrikeRate2021);
    } else if (selectedYear === 2022) {
      setWicket2020(wicket2022);
      setBowcount2020(bowcount2022);
      setAvgeconomyRate2020(avgeconomyRate2022);
      setTotalruns2020(totalruns2022);
      setBowcount2020(batcount2022);
      setAvgstrikeRate2020(avgstrikeRate2022);
    }
  }, [selectedYear]);

  useEffect(() => {
    if (selectedYear === 2020) {
      p2setWicket2020(p2wicket2020);
      p2setBowcount2020(p2bowcount2020);
      p2setAvgeconomyRate2020(p2avgeconomyRate2020);
      p2setTotalruns2020(p2totalruns2020);
      p2setBowcount2020(p2batcount2020);
      p2setAvgstrikeRate2020(p2avgstrikeRate2020);
    } else if (selectedYear === 2021) {
      p2setWicket2020(p2wicket2021);
      p2setBowcount2020(p2bowcount2021);
      p2setAvgeconomyRate2020(p2avgeconomyRate2021);
      p2setTotalruns2020(p2totalruns2021);
      p2setBowcount2020(p2batcount2021);
      p2setAvgstrikeRate2020(p2avgstrikeRate2021);
    } else if (selectedYear === 2022) {
      p2setWicket2020(p2wicket2022);
      p2setBowcount2020(p2bowcount2022);
      p2setAvgeconomyRate2020(p2avgeconomyRate2022);
      p2setTotalruns2020(p2totalruns2022);
      p2setBowcount2020(p2batcount2022);
      p2setAvgstrikeRate2020(p2avgstrikeRate2022);
    }
  }, [selectedYear]);

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
            <div className="bg-green-100 rounded-xl shadow-lg m-5 mt-2">
              <div className="PlayerbarLeft">
                <div className="PlayerbarItem">
                  <span className="PlayerbarTitle">{player1.name}</span>
                  <img className="" src={resultsP1.image} alt="player1 image" />
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
                      {/* <option value="2020">2020</option> */}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                        <path d="M10 12l-6-6h12l-6 6z" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="text-center m-5 mt-6">
                    
                      <span className="text-2xl font-medium bg-emerald-100 p-3 rounded-lg">
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
                      src={resultsP2.image}
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
                <span className="p-2 bg-green-100 rounded-lg shadow-xl">
                  {player1.name}
                </span>
              </div>
              <div className="m-5">
                  <span className="p-2 bg-green-100 rounded-lg shadow-xl">
                    {player1.born}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 bg-green-100 rounded-lg shadow-xl">
                    {player1.age}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 bg-green-100 rounded-lg shadow-xl">
                    {player1.batting_style}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 bg-green-100 rounded-lg shadow-xl">
                    {player1.bowling_style}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 bg-green-100 rounded-lg shadow-xl">
                    {player1.playing_role}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">{wicket2020}</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">{(avgeconomyRate2020/bowcount2020).toFixed(2)}</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">{totalruns2020}</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">{(avgstrikeRate2020/batcount2020).toFixed(2)}</span>
                </div>
                {/* <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">-</span>
                </div>
                <div className="m-5">
                  <span className="p-2 rounded-lg shadow-2xl">-</span>
                </div> */}
            </div>
            <div>
            <div className="text-center flex flex-col">
              <div className="m-5">
                <span className=" p-2  bg-green-100 rounded-lg shadow-xl">
                  FULL NAME
                </span>
              </div>
              <div className="m-5">
                <span className=" p-2  bg-green-100 rounded-lg shadow-xl">
                  BORN
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-green-100 rounded-lg shadow-xl">
                  AGE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-green-100 rounded-lg shadow-xl">
                  BATTING STYLE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-green-100 rounded-lg shadow-xl">
                  BOWLING STYLE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-green-100 rounded-lg shadow-xl">
                  PLAYING ROLE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-green-100 rounded-lg shadow-xl">
                  WICKETS TAKEN
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-green-100 rounded-lg shadow-xl">
                  ECONOMY RATE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-green-100 rounded-lg shadow-xl">
                  RUN SCORED
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 bg-green-100 rounded-lg shadow-xl">
                  STRIKE RATE
                </span>
              </div>
              {/* <div className="m-5">
                <span className="p-2 bg-green-100 rounded-lg shadow-xl">
                  BATTING RANKING
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 bg-green-100 rounded-lg shadow-xl">
                  BOWLING RANKING
                </span>
              </div> */}

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
                    <span className="p-2 bg-green-100 rounded-lg shadow-xl">
                      {player2.name}
                    </span>
                  </div>
                  <div className="m-5">
                  <span className="p-2 bg-green-100 rounded-lg shadow-xl">
                    {player2.born}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 bg-green-100 rounded-lg shadow-xl">
                    {player2.age}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 bg-green-100 rounded-lg shadow-xl">
                    {player2.batting_style}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 bg-green-100 rounded-lg shadow-xl">
                    {player2.bowling_style}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 bg-green-100 rounded-lg shadow-xl">
                    {player2.playing_role}
                  </span>
                </div>
                <div className="m-5">
                  <span className="p-2 bg-green-100 rounded-lg shadow-xl">{p2wicket2020}</span>
                </div>
                <div className="m-5">
                  <span className="p-2 bg-green-100 rounded-lg shadow-xl">{(p2avgeconomyRate2020/p2bowcount2020).toFixed(2)}</span>
                </div>
                <div className="m-5">
                  <span className="p-2 bg-green-100 rounded-lg shadow-xl">{p2totalruns2020}</span>
                </div>
                <div className="m-5">
                  <span className="p-2 bg-green-100 rounded-lg shadow-xl">{(p2avgstrikeRate2020/p2batcount2020).toFixed(2)}</span>
                </div>
                {/* <div className="m-5">
                  <span className="p-2 bg-green-100 rounded-lg shadow-xl">-</span>
                </div>
                <div className="m-5">
                  <span className="p-2 bg-green-100 rounded-lg shadow-xl">-</span>
                </div> */}
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