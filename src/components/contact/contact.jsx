// This is the "Contact" section to send a message with your name and email

import React, { useState, useRef, useEffect } from 'react';
import './contact.scss';
import useScrollVisibility from '../scroll/scroll';

function Contact() {
  const thresholds = [window.innerHeight * 0.4, window.innerHeight * 0.5];
  const [currentSectionRef, isVisible] = useScrollVisibility(thresholds);

  // glowing effect on click of the input
  const [isActive, setIsActive] = useState({
    name: false,
    email: false,
    message: false
  });

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (
      nameInputRef.current &&
      !nameInputRef.current.contains(event.target)
    ) {
      setIsActive((prevState) => ({
        ...prevState,
        name: false
      }));
    }

    if (
      emailInputRef.current &&
      !emailInputRef.current.contains(event.target)
    ) {
      setIsActive((prevState) => ({
        ...prevState,
        email: false
      }));
    }

    if (
      messageInputRef.current &&
      !messageInputRef.current.contains(event.target)
    ) {
      setIsActive((prevState) => ({
        ...prevState,
        message: false
      }));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const clearFields = () => {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  };


  return (
    <div id='contact' className={`contact ${isVisible ? 'visible' : ''}`} ref={currentSectionRef}>
      <h2>Contact</h2>

      <form action="https://formspree.io/f/xdoqnlqv" method="POST" enctype="multipart/form-data" className='contact__form'>
        <div className='contact__form__container name-email'>
          <div className='contact__form__container'>
            <label htmlFor="name" className='contact__form__name'>Name</label>
            <input
              type="text"
              name="name"
              required
              id="name"
              className={`contact__form__name-input ${isActive.name ? 'active' : ''}`}
              onClick={() => setIsActive((prevState) => ({ ...prevState, name: true }))}
              ref={nameInputRef}
            />
          </div>

          <div className='contact__form__container'>
            <label htmlFor="email" className='contact__form__email'>Email</label>
            <input
              type="email"
              name="email"
              required
              id="email"
              className={`contact__form__email-input ${isActive.email ? 'active' : ''}`}
              onClick={() => setIsActive((prevState) => ({ ...prevState, email: true }))}
              ref={emailInputRef}
            />
          </div>
        </div>

        <div className='contact__form__container message-submit'>
          <label htmlFor="message" className='contact__form__message'>Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className={`contact__form__message-text-area ${isActive.message ? 'active' : ''}`}
            onClick={() => setIsActive((prevState) => ({ ...prevState, message: true }))}
            ref={messageInputRef}
          ></textarea>
        </div>
        <input type="submit" value="Submit" className='contact__form__submit'/>
      </form>
    </div>
  );
}

export default Contact;
