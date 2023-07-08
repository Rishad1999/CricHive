// import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Hero, Posts, SideBar, Footer } from "../components";
import "./homepage.css";

import post_kane from "../assets/homepageAssets/kanewilliamson.png";
import post_waniya from "../assets/homepageAssets/waniya.png";

export const Homepage = () => {
  // const location = useLocation();
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

      <div class=" flex flex-wrap justify-center space-x-8 mx-auto max-w-screen-xl">
        <div class="basis-1/2 p-8">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to="#">
              <img className="rounded-t-lg" src={post_kane} alt="" />
            </Link>
            <div className="p-5">
              <Link to="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Kane Williamson addresses his future as an all-format player
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                The New Zealand skipper did play a good knock of 61 during the
                mega event but amassed only 178 runs overall at a strike rate of
                116.33. He plays the role of a top-order anchor in his side,
                though questions have been raised about his strike rate. At 32,
                workload management is also something Williamson will have to
                manage, with him captaining New Zealand in all three formats.
                Trent Boult, Williamson's teammate, recently declined NZC's
                central contract so that he could be selective about the formats
                he wants to play for his country. Williamson also has the option
                to go down that path but he sees the challenge of playing in all
                three formats as an enjoyable one.
              </p>
            </div>
          </div>
        </div>
        <div class="basis-1/2 p-8">
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
        </div>
      </div>

      <Footer />
    </>
  );
};
