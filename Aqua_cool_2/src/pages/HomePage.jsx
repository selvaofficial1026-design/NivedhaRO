import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Nivedha Water Service | Premium RO Water in Ariyalur</title>
        <meta name="description" content="Ensure your family's health with our 7-stage RO purified drinking water. Fast, reliable, and hygienic delivery right to your doorstep in Ariyalur." />
      </Helmet>
      <header className='hero'>
        <div className='hero-content'>
          <div className='badge-pill'><Zap size={14} /> Ariyalur's First Online Water Ordering Platform</div>
          <h1>100% Pure RO Water,<br />Delivered Across Ariyalur.</h1>
          <p>Ensure your family's health with our 7-stage RO purified drinking water. Fast, reliable, and hygienic delivery right to your doorstep.</p>
          <div className='hero-actions'>
            <button className='cta-btn primary-cta' onClick={() => navigate('/products')}>Order Now</button>
          </div>
        </div>
      </header>
    </>
  );
}
