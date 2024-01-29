import React from "react";
import { Link } from "react-router-dom";
import { GoDownload } from "react-icons/go";

function Hero() {
  return (
    <section className="hero">
      <div className="hero_container">
        <h1 className="hero_header">IMAGINE A PLACE...</h1>
        <p className="hero_info">
          ...where you can belong to a school club, a gaming group, or a
          worldwide community. Where just you and a handful of friends can spend
          time together. A place that makes it easy to talk everyday and hangout
          more often.
        </p>
        <div className="hero_buttons">
          <button type="button" className="download">
            <GoDownload />
            <small>Download</small>
          </button>
          <Link to="/login" className="login">
            Open Discord in your browser
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
