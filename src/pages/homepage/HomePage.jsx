// Logic imports
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

// Image import
import logo from "../../images/logos/logo color.png";

// Stylesheet import
import "./homepage.css";

function HomePage() {
  const { user } = useContext(UserContext);
  const [randomBurgerIndex, setRandomBurgerIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomBurgerIndex((randomBurgerIndex) => {
        if (randomBurgerIndex === 9) {
          return 1;
        } else {
          return randomBurgerIndex + 1;
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="homePageRoot">
      {user !== null ? (
        <h1 className="homePageHeading">
          Welcome back to BunDrop, {user.username}!
        </h1>
      ) : (
        <h1 className="homePageHeading">Welcome to BunDrop!</h1>
      )}
      <div id="homePageLinksContainer">
        <Link
          className="homePageLinkContainer"
          id="menuLinkContainer"
          to="/menu"
        >
          <div className="logPanel" id="menuLogPanel">
            <h3>Check out our menu!</h3>
            <img
              id="randomBurgerImage"
              src={
                process.env.PUBLIC_URL +
                `/images/burgers/burger-${randomBurgerIndex}.png`
              }
              alt="Random burger image"
            />
          </div>
        </Link>
        <div className="homePageLinkContainer">
          {user !== null ? (
            <div id="loggedInPanel" className="logPanel">
              <h2>Thank you for being a registered user!</h2>
              <p>
                Although we dont have much to say for now, we are very grateful
                that you'd join us as we push forward the restaurant industry
                and burger experiences
              </p>
            </div>
          ) : (
            <Link to="/register" className="homePageLinkContainer">
              <div id="notLoggedInPanel" className="logPanel">
                <h2>Register now!</h2>
                <p>
                  Registering an account lets you save favourites so you can get
                  your delicious drops even quicker next time! It also saves all
                  your orders to our hidden database in case we might give out
                  future discounts to our most loyal customers
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div id="aboutUsContainer">
        <h2 id="aboutUsHeader">About us</h2>
        <p>
          We are the burger restaurant that delivers your food by drones!
          <span id="aboutUsEmphasisDelivery">
            &nbsp;No more waiting in line, no more traffic jams, no more cold
            fries, no long delivery times, and no insane delivery fees.&nbsp;
          </span>
          Just order online and watch the sky as your delicious burger flies to
          your doorstep. Whether you crave the classics, a behemoth of a burger,
          or an extra crispy one, we have it all.
          <br />
          <br />
          By harnessing technology BunDrop will be the next step in burger
          experiences. Not only for you as the receiver of these awesome burgers
          but also for our planet by&nbsp;
          <span id="aboutUsEmphasisGreen">reduced emissions</span> from our
          electronic drones
        </p>
      </div>
    </div>
  );
}

export default HomePage;
