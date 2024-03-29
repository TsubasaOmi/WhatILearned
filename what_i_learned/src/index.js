import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/styles/style.css";
import AboutDynamoDB from "./pages/AboutDynamoDB";
import ECS from "./pages/ECS";
import HomePage from "./pages/HomePage";
import HowToSetUpDynamoDBInAmplify from "./pages/HowToSetUpDynamoDBInAmplify";
import HowToUseChromeDevTools from "./pages/HowToUseChromeDevTools";
import LearningCss from "./pages/LearningCss";

function App() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}

const container = document.getElementById("root");

createRoot(container).render(<App />);
