import React from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineCode, AiOutlineFolder} from 'react-icons/ai';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {useState} from 'react';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href = '#' onClick = {() => setActiveNav('#')} className = {activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href = '#about' onClick = {() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href = '#technologies' onClick = {() => setActiveNav('#technologies')} className = {activeNav === '#technologies' ? 'active' : ''}><AiOutlineCode /></a>
      <a href = '#portfolio' onClick = {() => setActiveNav('#portfolio')} className = {activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFolder /></a>
      <a href = '#contact' onClick = {() => setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav