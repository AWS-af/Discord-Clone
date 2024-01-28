import React from 'react';
import discod_logo from '../assets/discord_logo.svg';
import { Link } from 'react-router-dom';
import '../app.scss'

function NavBar() {
  return (
    <nav className="nav">
        <div className="nav_logo">
            <img src={discod_logo} alt="discod_logo" />
        </div>
        <div className="nav_links">
            <Link to="/donwload">Download</Link>
            <Link to="/nitro">Nitro</Link>
            <Link to="/discover">Discover</Link>
            <Link to="/safety">Safety</Link>
            <Link to="/support">Support</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/careers">Careers</Link>
        </div>
        <div className="nav_login_button">
            <Link to="/login">Login</Link>
        </div>
    </nav>
  )
}

export default NavBar