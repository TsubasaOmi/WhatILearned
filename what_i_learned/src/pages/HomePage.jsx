import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>読みやすい開発</h1>
      <Link to="/aboutdynamodb">
        <a>DynamoDBについて</a>
      </Link>
      <p></p>
      <Link to="/howtousechromedevtools">
        <a>Chrome DevToolsの使い方</a>
      </Link>
    </div>
  );
};

export default HomePage;
