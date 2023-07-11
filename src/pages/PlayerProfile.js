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
  const [totalRuns, setTotalRuns] = useState(0);
  const [totalWickets, setTotalWickets] = useState(0);

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

  const handleSearchResults = async (searchResults) => {
    setResults(searchResults);
    await fetchPlayerData(searchResults);
  };

  const fetchPlayerData = async (searchResults) => {
    try {
      const db = getFirestore();
      const battingQuerySnapshot = await getDocs(
        query(
          collection(db, "Batting"),
          where("name", "==", searchResults[0].full_name),
          where("Year", "==", 2021)
        )
      );
      const bowlingQuerySnapshot = await getDocs(
        query(
          collection(db, "Bowling"),
          where("Name", "==", searchResults[0].full_name),
          where("Year", "==", 2021)
        )
      );

      let totalRuns = 0;
      let totalWickets = 0;
      let battingCount = 0;
      let bowlingCount = 0;

      battingQuerySnapshot.forEach((doc) => {
        const data = doc.data();
        totalRuns += data.Runs;
        battingCount++;
      });
      setTotalRuns(totalRuns);

      bowlingQuerySnapshot.forEach((doc) => {
        const data = doc.data();
        totalWickets += data.Wickets;
        bowlingCount++;
      });
      setTotalWickets(totalWickets);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (results.length > 0) {
    return (
      <>
        <div>{totalRuns}</div>
        <div className="mx-20 mt-5 rounded-lg">
          <SearchPlayer onSearchResults={handleSearchResults} />
        </div>

        <div className="shadow-2xl mx-20 mt-5 rounded-lg h-32 sm:h-48 md:h-64 lg:h-96 bg-gradient-to-r from-gray-500 to-slate-300 relative ...">
          <div className="absolute bottom-0 left-0 ml-10 mb-10">
            <h1 className="text-white text-4xl">M.S. Dhoni</h1>
            <p className="text-white text-3xl">
              India <span>| Wicket Keeper</span>
            </p>
          </div>
          <div className="w-60 absolute bottom-0 right-10 ...">
            <img src={PlayerImg} alt="Logo" />
          </div>
        </div>

        {results.map((result) => (
          <div key={result.id}>
            <div className="bg-gradient-to-r from-gray-500 to-slate-300 rounded-lg mx-20 mt-5 shadow-xl">
              <div className="grid grid-cols-3 gap-4 font-medium">
                <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 m-3 rounded-lg">
                  <h2>FULL NAME</h2>
                  <p>{result.full_name}</p>
                </div>
                {/* Other fields */}
              </div>
            </div>
          </div>
        ))}

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
          {/* Bowling statistics table */}
        </div>

        <Footer />
      </>
    );
  }

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
