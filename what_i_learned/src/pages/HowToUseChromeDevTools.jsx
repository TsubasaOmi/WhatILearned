import { Link } from "react-router-dom";
import ChromeDevTools from "../assets/images/ChromeDevTools.png";

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
      <Link to="/">
        <button>Home Page</button>
      </Link>
    </div>
  );
};

export default HowToUseChromeDevTools;
