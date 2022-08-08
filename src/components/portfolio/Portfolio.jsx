import React from 'react';
import './portfolio.css';
import IMG4 from '../../assets/portfolio4.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG1 from '../../assets/portfolio1.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Camping Buddy',
    github: 'https://github.com/lucawic/api-pro',
    live: 'https://lucawic.github.io/api-pro/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Car Mart',
    github: 'https://github.com/jhlanger/CarMart',
    live: 'https://gp2carmart.herokuapp.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Post 4 Sale',
    github: 'https://github.com/lucawic/post4sale',
    live: 'https://quirky-pasteur-071244.netlify.app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'React Weather App',
    github: 'https://github.com/kevinphan97/react-weather-app',
    live: 'https://kp-react-weather.herokuapp.com'
  }
]

const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <div className = 'container portfolio_container'>
        {
          data.map(({id, image, title, github, live}) => {
            return (
              <article key = {id} className = 'portfolio_item'>
                <div className="portfolio_item-image">
                  <img src = {image} alt = {title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href = {github} className = 'btn' target = '_blank' rel = 'noreferrer'>Code</a>
                  <a href = {live} className = 'btn btn-primary' target = '_blank' rel = 'noreferrer'>Live</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio