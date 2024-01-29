import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";
import "../app.scss";
import discod_logo from "../assets/discord_logo.svg";

function NavBar() {
  const [click, setClick] = useState(false);
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setClick((prev) => !prev);
  };
  function handleNav(){
    if(window.scrollY > 10 && window.innerWidth < 1024){
        setNav(true);
    }else{
        setNav(false)
    }
  }
  window.addEventListener('scroll', handleNav);
  useEffect(()=>{
    handleNav();
  },[])

  return (
    <nav className={nav ? 'nav nav_hover' : 'nav'}>
      <div className="nav_container">
        <div className="nav_logo">
          <Link to="/">
            <img src={discod_logo} alt="discod_logo" />
          </Link>
        </div>
        <div className="nav_links">
          <Link className="link" to="/donwload">
            Download
          </Link>
          <Link className="link" to="/nitro">
            Nitro
          </Link>
          <Link className="link" to="/discover">
            Discover
          </Link>
          <Link className="link" to="/safety">
            Safety
          </Link>
          <Link className="link" to="/support">
            Support
          </Link>
          <Link className="link" to="/blog">
            Blog
          </Link>
          <Link classNaFme="link" to="/careers">
            Careers
          </Link>
        </div>

        <div className="nav_extra_icons">
          <span className="nav_login_button">
            <Link to="/login">Login</Link>
          </span>
          <span onClick={handleClick} className="nav_menu_icon">
            <FaBars />
          </span>
        </div>
      </div>
      <div className={click ? "nav_menu nav_menu_click" : "nav_menu"}>
        <div className="nav_menu_logo">
          <img src={discod_logo} alt="Discod Logo" />
          <LiaTimesSolid onClick={handleClick} />
        </div>
        <ul className="nav_menu_links">
          <li>
            <Link to="/donwload">Download</Link>
          </li>
          <li>
            <Link to="/nitro">Nitro</Link>
          </li>
          <li>
            <Link to="/safety">Safety</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
        </ul>
        <button type="button">
          <FiDownload />
          <small>Downlaod</small>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
