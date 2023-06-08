import React from 'react'
import "./Css/cont.css";

const Contact = () => {
  return (
    <div>
      <h2 className='common-heading'>Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.49483745068!2d75.69903094160469!3d22.723888283278573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1686074383823!5m2!1sen!2sin" title='map' width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className='contact-container'>
        <div className='contact-form'>
          <form className='contact-inputs' action='https://formspree.io/f/xayzgvdd' method='POST'>
            <input type='text' placeholder='username' required autoComplete='off' />
            <input type='email' name='Email' placeholder='Email' autoComplete='off' required />
            <textarea name='message' cols='30' rows="10" required autoComplete='off' placeholder='Enter your message'></textarea>
            <input className='submit-input' type="submit" value='Send' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact