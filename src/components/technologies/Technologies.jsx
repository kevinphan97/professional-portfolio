import React from 'react';
import './technologies.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Technologies = () => {
  return (
    <section id = 'technologies'>
      <h5>My Skills</h5>
      <h2>Technologies</h2>
      <div className = 'container experience_container'>
        <div className = 'experience_frontend'>
          <h3>Frontend</h3>
          <div className="experience_content">
            <article className = 'experience_details'>
              <BsPatchCheckFill className = 'experience_icon' />
              <div>
                <h4>HTML</h4>
                <small className = 'text-light'>Proficient</small>
              </div>
            </article>
            <article className = 'experience_details'>
              <BsPatchCheckFill className = 'experience_icon' />
              <div>
                <h4>CSS</h4>
                <small className = 'text-light'>Proficient</small>
              </div>
            </article>
            <article className = 'experience_details'>
              <BsPatchCheckFill className = 'experience_icon' />
              <div>
                <h4>JavaScript</h4>
                <small className = 'text-light'>Proficient</small>
              </div>
            </article>
            <article className = 'experience_details'>
              <BsPatchCheckFill className = 'experience_icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className = 'text-light'>Proficient</small>
              </div>
            </article>
            <article className = 'experience_details'>
              <BsPatchCheckFill className = 'experience_icon' />
              <div>
                <h4>React</h4>
                <small className = 'text-light'>Proficient</small>
              </div>
            </article>
          </div>
        </div>
        <div className = 'experience_backend'>
          <h3>Backend</h3>
          <div className="experience_content">
            <article className = 'experience_details'>
              <BsPatchCheckFill className = 'experience_icon' />
              <div>
                <h4>Node JS</h4>
                <small className = 'text-light'>Proficient</small>
              </div>
            </article>
            <article className = 'experience_details'>
              <BsPatchCheckFill className = 'experience_icon' />
              <div>
                <h4>Express JS</h4>
                <small className = 'text-light'>Proficient</small>
              </div>
            </article>
            <article className = 'experience_details'>
              <BsPatchCheckFill className = 'experience_icon' />
              <div>
                <h4>MongoDB</h4>
                <small className = 'text-light'>Proficient</small>
              </div>
            </article>
            <article className = 'experience_details'>
              <BsPatchCheckFill className = 'experience_icon' />
              <div>
                <h4>MySQL</h4>
                <small className = 'text-light'>Proficient</small>
              </div>
            </article>
            <article className = 'experience_details'>
              <BsPatchCheckFill className = 'experience_icon' />
              <div>
                <h4>PLSQL</h4>
                <small className = 'text-light'>Proficient</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies