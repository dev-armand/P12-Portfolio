import React, { useState, useRef, useEffect } from 'react';
import './contact.scss';


function Contact() {
  // animation effect appear/disappear
  const [isVisible, setIsVisible] = useState(false);
  const currentSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = currentSectionRef.current.getBoundingClientRect();
      const thresholdAppear = window.innerHeight * 0.4;
      const thresholdDisappear = window.innerHeight * 0.5; // Adjust this value for disappearance

      if (top < thresholdAppear && bottom > thresholdDisappear) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  return (
    <div id='contact' className={`contact ${isVisible ? 'visible' : ''}`} ref={currentSectionRef}>
      <h2>Contact</h2>

      <form action="mailto:armand.bredean@gmail.com" method="post" enctype="text/plain" className='contact__form'>
        <div className='contact__form__container name-email'>
          <div className='contact__form__container'>
            <label htmlFor="name" className='contact__form__name'>Name</label>
            <input
              type="text"
              name="name"
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

        <input type="submit" value="Submit" className='contact__form__submit' />

      </form>
    </div>
  );
}

export default Contact;
