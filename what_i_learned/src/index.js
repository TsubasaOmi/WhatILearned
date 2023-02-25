import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutDynamoDB from "./pages/AboutDynamoDB";
import HomePage from "./pages/HomePage";
import HowToUseChromeDevTools from "./pages/HowToUseChromeDevTools";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/aboutdynamodb" element={<AboutDynamoDB />} />
        <Route
          path="/howtousechromedevtools"
          element={<HowToUseChromeDevTools />}
        />
      </Routes>
    </Router>
  );
}

const container = document.getElementById("root");

createRoot(container).render(<App />);
