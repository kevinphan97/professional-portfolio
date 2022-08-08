import React from 'react';
import './about.css';
import MeAbout from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {BiBuilding, BiPencil} from 'react-icons/bi';

const About = () => {
  return (
    <section id = 'about'>
      <h5>Sharing A Little</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src = {MeAbout} alt = 'Kevin Phan' />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className = 'about_card'>
              <FaAward className = 'about_icon'/>
              <h5>Experience</h5>
              <small>1+ Years Coding</small>
            </article>
            <article className = 'about_card'>
              <BiBuilding className = 'about_icon'/>
              <h5>Current Employer</h5>
              <small>Infosys</small>
            </article>
            <article className = 'about_card'>
              <BiPencil className = 'about_icon'/>
              <h5>Proficient In</h5>
              <small>Web Development</small>
            </article>
          </div>
          <p>
            I am a 25 year old Vietnamese American born and raised in Arizona.
            I graduated from Arizona State University in 2019 with a BS in Health Sciences
            and obtained a full stack web development certification from the University of 
            Arizona in 2021. Some activities I love doing during my free time are playing volleyball
            and video games. Feel free to connect with me and or ask me any questions you would like using
            the contact forms!
          </p>
          <a href = '#contact' className = 'btn btn-primary'>Connect With Me</a>
        </div>
      </div>
    </section>
  )
}

export default About