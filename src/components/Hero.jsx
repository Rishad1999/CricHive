import "./hero.css";
import HeroImg from "../assets/14.jpg";
import cricAILogo from "../assets/homepageAssets/cricAILogo.png";

// headerTitles absolute bottom-0 left-0 ml-10 mb-10 text-9xl z-10 bg-red-50

export const Hero = () => {
  return (
    <div className="header relative z-0">
      <div className="headerTitles absolute bottom-0 left-0 ml-10 mb-10 w-60 z-10 shadow-xl">
        {/* <span className="headerTitleSm ">PATHWAY OF CRICKET</span> */}
        {/* <span className="headerTitleLg ">cricAI</span> */}
        <img src={cricAILogo} alt="Logo" />
      </div>
      <img className="headerImg" src={HeroImg} alt="Logo" />
      {/* <span className="Stories bg-red-50 justify-center">MATCH STORIES</span> */}
    </div>
  );
};
