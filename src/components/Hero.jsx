import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoDownload } from "react-icons/go";
import hero_bg_right from "../assets/hero_bg_right.svg";
import hero_bg_left from "../assets/hero_bg_left.svg";
import hero_2_img from "../assets/group_bg.svg";

function Hero() {
  return (
    <>
      <section className="hero">
        <img src={hero_bg_right} className="hero_bg_right" />
        <div className="hero_container">
          <h1 className="hero_header">IMAGINE A PLACE...</h1>
          <p className="hero_info">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk everyday and
            hangout more often.
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
        <img src={hero_bg_left} className="hero_bg_left" />
      </section>

    {/* HERO SECOND SECTION STARTS HERE */}

      <section className="hero_2">
        <div className="hero_2_bg">
          <img src={hero_2_img} alt="" />
        </div>
        <div className="hero_2_info">
          <h2 className="hero_2_header">
            Create an invite- only place where you belong.
          </h2>
          <p className="hero_p">
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
