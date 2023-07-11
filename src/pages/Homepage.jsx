// import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Hero, Posts, SideBar, Footer } from "../components";
import "./homepage.css";

import post_kane from "../assets/homepageAssets/kanewilliamson.png";
import post_waniya from "../assets/homepageAssets/waniya.png";

import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";

export const Homepage = () => {
  // const location = useLocation();
  const [posts, setPosts] = useState([]);
  const postsRef = collection(db, "player_profile");

  useEffect(() => {
    async function getPosts(){
      const data = await getDocs(postsRef);
      setPosts(data.docs.map((document) => (
        {...document.data(), id: document.id}))
      );
    }
    console.log("---");
    getPosts();
  }, []);

  return (
    <>
      <Hero />
      <div className="home">
        {/* <Posts /> */}
        {/* <SideBar /> */}
      </div>

      <div className="rounded-lg mx-20 mt-5 p-3 shadow-xl">
        <p className="text-center font-medium">MATCH STORIES</p>
      </div>

      { posts.map(post => (
        <div class=" flex flex-wrap justify-center space-x-8 mx-auto max-w-screen-xl">
        <div class="basis-1/2 p-8">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to="#">
              <img className="rounded-t-lg" src={post_kane} alt="" />
            </Link>
            <div className="p-5">
              <Link to="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {post.name}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post.population}
              </p>
            </div>
          </div>
        </div>
        {/* <div class="basis-1/2 p-8">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to="#">
              <img className="rounded-t-lg" src={post_waniya} alt="" />
            </Link>
            <div className="p-5">
              <Link to="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Top wicket-takers of T20 World Cup 2022
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Hasaranga finished with one wicket fewer than in 2021, but once
                again led the chart for bowlers with 15 wickets in the
                tournament, including a best of 3/8. Averaging 13.26 in the
                tournament, Hasaranga was a big presence for Sri Lanka
                throughout their T20 World Cup campaign. De Leede excelled in
                the backend of the innings with his medium pace, and finished
                with 13 wickets at an average of 13.0 in the tournament. His
                economy rate of 7.68 also showed that he played a good
                supporting role to the impressive Netherlands pace attack. The
                Player of the Tournament, Sam Curran finished with 13 wickets,
                five of them coming in a single game where he registered 
              </p>
            </div>
          </div>
        </div> */}
      </div>
      ))}

      <Footer />
    </>
  );
};
