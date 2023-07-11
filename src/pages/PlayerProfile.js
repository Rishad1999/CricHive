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

export const PlayerProfile = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);


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

      </div>
    </>
  );
};
