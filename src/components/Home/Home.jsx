import React from "react";
import Data from "./Data";
import Social from "./Social";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />

            <div className="home__img"></div>
            <Data />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
