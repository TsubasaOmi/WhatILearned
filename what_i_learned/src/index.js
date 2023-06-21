import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/styles/style.css";
import AWSTraningReview from "./pages/AWSTraningReview";
import AboutDynamoDB from "./pages/AboutDynamoDB";
import ECS from "./pages/ECS";
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import HowToSetUpDynamoDBInAmplify from "./pages/HowToSetUpDynamoDBInAmplify";
import HowToUseChromeDevTools from "./pages/HowToUseChromeDevTools";
import LearningCss from "./pages/LearningCss";
import PracticeJS from "./pages/PracticeJS";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        //
        TODO:ここに共通コンポーネント(ホームページへ)を含むルートとそうでないルートをそれぞれ書く
        <Route exact path="/" element={<HomePage />} />
        <Route path="/aboutdynamodb" element={<AboutDynamoDB />} />
        <Route
          path="/howtosetupdynamodbinamplify"
          element={<HowToSetUpDynamoDBInAmplify />}
        />
        <Route
          path="/howtousechromedevtools"
          element={<HowToUseChromeDevTools />}
        />
        <Route path="/ecs" element={<ECS />} />
        <Route path="/learningcss" element={<LearningCss />} />
        <Route path="/practicejs" element={<PracticeJS />} />
        <Route path="/awstraningreview" element={<AWSTraningReview />} />
      </Routes>
    </Router>
  );
}

const container = document.getElementById("root");

createRoot(container).render(<App />);
