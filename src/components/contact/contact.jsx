import React, { useRef, useState } from 'react';
import './contact.scss';
import useScrollVisibility from '../scroll/scroll';


function Contact() {
  const thresholds = [window.innerHeight * 0.4, window.innerHeight * 0.5];
  const [currentSectionRef, isVisible] = useScrollVisibility(thresholds);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const formSpree = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xdoqnlqv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        console.log('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '' });

        const successMessage = document.querySelector('.contact__success-message');
        successMessage.classList.add('visible');
        setTimeout(() => successMessage.classList.remove('visible'), 5000)

      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div id='contact' className={`contact ${isVisible ? 'visible' : ''}`} ref={currentSectionRef} >
      <h2>Contact</h2>

      <form encType="multipart/form-data" className='contact__form'onSubmit={formSpree}>
        <div className='contact__container name-email'>
          <div className='contact__container'>
            <label htmlFor="name" className='contact__name'>Name</label>
            <input
              type="text"
              name="name"
              required
              id="name"
              className="contact__name-input"
              ref={nameInputRef}          
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className='contact__container'>
            <label htmlFor="email" className='contact__email'>Email</label>
            <input
              type="email"
              name="email"
              required
              id="email"
              className="contact__email-input"
              ref={emailInputRef}
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='contact__container message-submit'>
          <label htmlFor="message" className='contact__message'>Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="contact__message-text-area"
            ref={messageInputRef}
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className='contact__submit-container'>
        <div className='contact__success-message contact__not-visible'>Message successfully send !</div>
        <input type="submit" value="Submit" className='contact__submit'/>
        </div>
      </form>
    </div>
  );
}

export default Contact;
