import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

const Footer = () => (
  <footer id="footer-wrapper">
    <NavLink to="/about"
             id="footer"
             activeStyle={{
               visibility: "hidden",
             }}>
      CC-BY 4.0 &copy; 2021
    </NavLink>
  </footer>
)

export default Footer;
