import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-links">
        <div className="app__navbar-links_logo">
          <img src={logo} alt='logo' />
        </div>
        <div className="app__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#portfolio">Portfolio</a></p>
          <p><a href="#echipa">Echipa</a></p>
        </div>
      </div>
      <div className="app__navbar-sign">
        <button type="button">Contact</button>
      </div>
      <div className="app__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="app__navbar-menu_container scale-up-center">
          <div className="app__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#portfolio">Portfolio</a></p>
            <p><a href="#echipa">Echipa</a></p>
          </div>
          <div className="app__navbar-menu_container-links-sign">
            <button type="button">Contact</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;