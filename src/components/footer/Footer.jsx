import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <a href = '#' className = 'footer_logo'>Kevin Phan</a>
      <ul className = 'permalinks'>
        <li><a href = '#'>Home</a></li>
        <li><a href = '#about'>About</a></li>
        <li><a href = '#technologies'>Technologies</a></li>
        <li><a href = '#portfolio'>Portfolio</a></li>
        <li><a href = '#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href = 'https://www.facebook.com/KevinnBPhan'><FaFacebookF /></a>
        <a href = 'https://www.instagram.com/kevinnbphan/'><FiInstagram /></a>
      </div>
    </footer>
  )
}

export default Footer