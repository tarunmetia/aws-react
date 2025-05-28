import React from 'react'
import './Footer.scss'
import Facebook from '../../../Asset/Images/facebook.png';
import Youtube from '../../../Asset/Images/youtube.png';
const Footer = () => {
  return (
      <footer class="footer">
        <div class="footer__content">
            <div class="footer__left">
            <p>Contact Us:</p>
            <p>📞 9874620406</p>
            <p>✉️ bachhrifootballmath@gmail.com</p>
            </div>
            <div class="footer__right">
                <p>Follow us:</p>
            <a href="https://www.facebook.com/bachhrifootballmath/" target="_blank" aria-label="Facebook" rel="noreferrer">
                <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/channel/UC103On_-dZW7lPQc9U3iLOg" target="_blank" aria-label="YouTube" rel="noreferrer">
                <img src={Youtube} alt="YouTube" />
            </a>
            </div>
        </div>
        </footer>
  )
}

export default Footer
