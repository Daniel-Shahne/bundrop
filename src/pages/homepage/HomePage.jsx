// Logic imports
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";

// Image import
import logo from "../../images/logos/logo color.png";

// Stylesheet import
import "./homepage.css";

function HomePage() {
  const { user } = useContext(UserContext);

  return (
    <div id="homePageRoot">
      {user !== null ? (
        <h1 className="homePageHeading">Welcome back, {user.username}!</h1>
      ) : (
        <h1 className="homePageHeading">Welcome to BunDrop!</h1>
      )}
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

      <div id="homePageLinksContainer"></div>
    </div>
  );
}

export default HomePage;
