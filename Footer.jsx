import React from 'react';
import './footer.css';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';

const Footer = () => (

    <div className='app__newsletter section__padding flex__center'>
        <div className='app__newsletter-heading'>
        <p >Abonati-va la Newsletter</p>
        </div>
        <div className='app__newsletter-input flex__center'>
        <input type='email' placeholder='Introduceti e-mail'/>
        <button className='custom__button'>Trimite</button>
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>
        </div>
        
        <div className='footer__copyright'>
            <p >Toate drepturile sunt rezervate.</p>
        </div>
  </div>

);

export default Footer;
