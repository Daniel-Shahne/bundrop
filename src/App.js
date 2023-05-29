// Logic imports
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages (component) imports
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import NavBar from "./components/navbar/NavBar";

// Stylesheet imports
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
