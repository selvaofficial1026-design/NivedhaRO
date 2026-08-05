import React, { memo } from 'react';
import { Droplets, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants/data';

const Footer = memo(({ isHomePage }) => {
  if (!isHomePage) return null;
  
  return (
    <footer>
      <div className='footer-content'>
        <div className='footer-brand'>
          <h2><Droplets size={22} /> Nivedha <span>Water</span></h2>
          <p>Purity in every drop. Delivering health and premium hydration across Ariyalur since day one.</p>
          <a className='footer-whatsapp' href={'https://wa.me/' + WHATSAPP_NUMBER} target='_blank' rel='noreferrer'>
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
        </div>
        
        <div className='footer-contact'>
          <h3>Contact Us</h3>
          <p><Phone size={15} /> +91 88259 40239</p>
          <p><MapPin size={15} /> Located & Serving in Ariyalur</p>
          <p><Clock size={15} /> Open Daily: 7:00 AM – 9:00 PM</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>© {new Date().getFullYear()} Nivedha Water Service, Ariyalur. All rights reserved.</p>
      </div>
    </footer>
  );
});

export default Footer;
