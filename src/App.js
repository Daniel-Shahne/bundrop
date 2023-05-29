// Logic imports
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages (component) imports
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";

// Stylesheet imports
import "./App.css";

function App() {
  return (
    <Router>
      <div>Outside routes</div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
