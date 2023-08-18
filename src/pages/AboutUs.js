import thisan from "../assets/thisan.png";
import mun from "../assets/mun.jpg";
import sadee from "../assets/sadee.png";
import rish from "../assets/rish.png";
import about from "../assets/about.png";

import fight from "../assets/fight.jpg";

import {Footer } from "../components";

export const AboutUs = () => {
  return (
    <>
      {/* <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-6">
          <h1 className="text-gray-800 font-bold text-3xl">About Us</h1>
        </div>
      </header> */}

      <div className="bg-white min-h-screen">
      <div className="container mx-auto mt-8 px-6">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* code here */}
          <main className="container mx-auto mt-8 px-6">
        <div className="flex flex-col md:flex-row">
          <div className="mx-5 md:w-1/2">
            <img
              src={about}
              alt="Team photo"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to the official website of international cricket, the
              premier platform for all things related to the world's most
              popular sport. Our website provides fans and enthusiasts with
              up-to-date information on international cricket tournaments,
              teams, players, match fixtures, scores, and statistics.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our goal is to create a comprehensive and engaging online
              experience for all cricket lovers around the globe, regardless of
              their location or time zone. We strive to be a reliable and
              trustworthy source of information, delivering accurate and timely
              updates on all cricket-related news.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              As the governing body of international cricket, we are committed
              to promoting the game's spirit of fair play, teamwork, and
              sportsmanship. Our website serves as a hub for all cricket-related
              activities, including the latest news, interviews, and analyses
              from our team of experts.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Whether you are a seasoned cricket fan or a newcomer to the game,
              our website has something for everyone. We invite you to explore
              our content and join the millions of fans worldwide who share a
              passion for this exciting and dynamic sport.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <img
                src={rish}
                alt="Team member"
                className="rounded-full h-80 w-80 shadow-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">Rishad M.R.M</h3>
              <p className="text-gray-600">UI developer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={mun}
                alt="Team member"
                className="rounded-full h-80 w-80 shadow-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">Munzir M.M.M</h3>
              <p className="text-gray-600">UI developer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={sadee}
                alt="Team member"
                className="rounded-full h-80 w-80 shadow-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">Sadeepa P</h3>
              <p className="text-gray-600">Backend developer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={thisan}
                alt="Team member"
                className="rounded-full h-80 w-80 shadow-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">Sankalpa T</h3>
              <p className="text-gray-600">Backend developer</p>
            </div>
          </div>
        </div>
      </main>
        </div>
      </div>
    </div>
      

      

      <Footer />
    </>
  );
};
