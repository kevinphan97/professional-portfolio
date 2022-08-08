import React, {useRef, useState} from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [fullEmail, setFullEmail] = useState('');
  const [textArea, setTextArea] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setFullName('');
    setFullEmail('');
    setTextArea('');

    emailjs.sendForm('service_35v02pl', 'template_pmjou65', form.current, 'GqqIDWlv7lQ91BxAh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id = 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className = 'container contact_container'>
        <div className = 'contact_options'>
          <article className = 'contact_option'>
            <MdOutlineEmail className = 'contact_icon' />
            <h4>Email</h4>
            <h5>kevin.b.phan97@gmail.com</h5>
            <a href = 'mailto:kevin.b.phan97@gmail.com' target = '_blank' rel = 'noreferrer'>Send a Message</a>
          </article>
          <div className = 'contact_options'>
          <article className = 'contact_option'>
            <RiMessengerLine className = 'contact_icon' />
            <h4>Messenger</h4>
            <h5>Kevin Phan</h5>
            <a href = 'https://m.me/KevinnBPhan' target = '_blank' rel = 'noreferrer'>Send a Message</a>
          </article>
          </div>
        </div>
        <form ref = {form} onSubmit = {sendEmail} >
          <input type = 'text' name = 'name' placeholder = 'Your Full Name (Required)' value = {fullName} onChange = {event => setFullName(event.target.value)} required />
          <input type = 'email' name = 'email' placeholder = 'Your Email (Required)' value = {fullEmail} onChange = {event => setFullEmail(event.target.value)} required />
          <textarea name = 'message' rows = '7' placeholder = 'Your Message (Required)' value = {textArea} onChange = {event => setTextArea(event.target.value)} required />
          <button type = 'submit' className = 'btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact