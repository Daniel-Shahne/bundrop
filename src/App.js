// Logic imports
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, createContext } from "react";

// Pages (component) imports
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// Individual component imports
import NavBar from "./components/navbar/NavBar";

// Stylesheet imports
import "./App.css";

// Context containing user login state
export const UserContext = createContext(null);

function App() {
  // State variable containing logged in user
  const [user, setUser] = useState(null);

  // State variable containing items in cart
  const [cart, setCart] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, cart, setCart }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/account" element={<AccountPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
