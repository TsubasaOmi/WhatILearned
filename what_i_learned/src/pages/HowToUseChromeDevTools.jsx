import ChromeDevTools from "../assets/images/ChromeDevTools.png";
import HomePageLink from "../components/HomePageLink";

const HowToUseChromeDevTools = () => {
  return (
    <div>
      <h1>Chrome DevToolsについて学ぼう！</h1>
      <p></p>
      <img
        src={ChromeDevTools}
        alt="Chrome DevTools"
        className="img-size"
      ></img>
      <p></p>
      <HomePageLink></HomePageLink>
    </div>
  );
};

export default HowToUseChromeDevTools;
