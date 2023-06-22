import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>わからないをわかるにする思考過程</h1>
      <Link to="/aboutdynamodb">DynamoDBについて</Link>
      <p></p>
      <Link to="/howtosetupdynamodbinamplify">
        Amplify環境でDynamoDBを追加する方法&ハマったこと
      </Link>
      <p></p>
      <Link to="/howtousechromedevtools">Chrome DevToolsの使い方</Link>
      <p></p>
      <Link to="/ecs">ECSについて</Link>
      <p></p>
      <Link to="/learningcss">CSS学習</Link>
      <p></p>
      <Link to="/practicejs">JS練習</Link>
      <p></p>
      <Link to="/awstraningreview">AWS研修</Link>
      <p></p>
    </div>
  );
};

export default HomePage;
