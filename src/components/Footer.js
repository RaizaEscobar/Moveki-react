import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container' id="footer">
      <section className='footer-email'>
        <p className='footer-email-heading'>
         Let's make something cool together!
        </p>
        <p className='footer-email-text'>
          raizaescobar@gmail.com
        </p>
      </section>
      <div className='footer-links'>
        <div className='footer-link-items'>
          <a href='https://www.linkedin.com/in/raizaescobar/' target="_blank" rel="noreferrer">  <i className='fab fa-linkedin' /></a>
          <a href='https://github.com/RaizaEscobar' target="_blank" rel="noreferrer"> <i className='fab fa-github' /></a>
        </div>

      </div>

    </div>
  );
}

export default Footer;