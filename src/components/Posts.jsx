import "./posts.css";
import post_1 from "../assets/homepageAssets/6.jpeg";
import post_2 from "../assets/homepageAssets/7.jpg";

export const Posts = () => {
  return (
    <div className="posts">
      <img src={post_1} alt="" className="Recent" />
      <span className="StoryRight">
        Team, including its leadership group, was caught on camera trying to
        rough up one side of the ball with a piece of sandpaper to gain an
        unfair advantage during a Test match against South Africa. The scandal
        led to the bans of captain Steve Smith and vice-captain David Warner, as
        well as opening batsman Cameron Bancroft. The incident was widely
        criticized for violating the spirit of the game and highlighting broader
        cultural issues within Australian cricket. Cricket Australia undertook a
        review and implemented reforms to restore the integrity of the sport.
      </span>
      <img src={post_2} alt="" className="Recent" />
      <span className="StoryLeft">
        The Arosa Sri Lanka cricket team's tour of South Africa in 1982-83 was a
        cricketing tour undertaken by a Sri Lankan team consisting of national
        and club players. The team struggled, losing all four first-class
        matches and winning only one limited-overs match, due to lack of
        experience on South African wickets and injuries to key players.
        However, the tour was significant as it marked the first time a Sri
        Lankan team had toured South Africa and provided valuable experience for
        young players who would later play key roles in the national team.
        Overall, the tour was seen as a learning experience for Sri Lankan
        cricket, paving the way for future tours and stronger performances.
      </span>
    </div>
  );
};
