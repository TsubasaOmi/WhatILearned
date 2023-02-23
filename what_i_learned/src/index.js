import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutDynamoDB from "./pages/AboutDynamoDB";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutdynamodb" element={<AboutDynamoDB />} />
      </Routes>
    </Router>
  );
}

const container = document.getElementById("root");

createRoot(container).render(<App />);
