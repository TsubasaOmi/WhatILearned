import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>わからないをわかるにする思考過程</h1>
      <Link to="/aboutdynamodb">DynamoDBについて</Link>
      <p></p>
      <Link to="/howtousechromedevtools">Chrome DevToolsの使い方</Link>
      <p></p>
      <Link to="/ecs">ECSについて</Link>
    </div>
  );
};

export default HomePage;
