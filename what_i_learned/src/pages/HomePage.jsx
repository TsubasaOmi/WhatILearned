import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>What I Learned</h1>
      <Link to="/aboutdynamodb">
        <button>About DynamoDB</button>
      </Link>
    </div>
  );
};

export default HomePage;
