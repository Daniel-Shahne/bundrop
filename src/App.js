// Logic imports
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, createContext } from "react";

// Pages (component) imports
import HomePage from "./pages/homepage/HomePage";
import MenuPage from "./pages/menupage/MenuPage";
import CartPage from "./pages/cartpage/CartPage";
import LoginPage from "./pages/loginpage/LoginPage";
import RegisterPage from "./pages/registerpage/RegisterPage";
import PaymentPage from "./pages/paymentpage/PaymentPage";
import OrderConfirmPage from "./pages/orderconfirmpage/OrderConfirmPage";

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
  /* The cart is an object with the keys being 
  the id of the food to buy and the value being
  the amount of it */
  const [cart, setCart] = useState({});

  // State variables containing the entire menu
  const [foodsMenu, setFoodsMenu] = useState(null);

  // Fetches the entire menu and stores in menu state var
  useEffect(() => {
    fetch("http://localhost:2000/foodsMenu")
      .then((res) => res.json())
      .then((jsonRes) => setFoodsMenu(jsonRes));
  }, []);

  // Updates the user entry in json-server whenever
  // its values in the state variable are changed
  useEffect(() => {
    if (user !== null) {
      fetch(`http://localhost:2001/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        cart,
        setCart,
        foodsMenu,
      }}
    >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/payment/:paymentType" element={<PaymentPage/>}></Route>
          <Route path="/confirm" element={<OrderConfirmPage />}></Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
