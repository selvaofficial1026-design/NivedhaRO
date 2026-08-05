import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Nivedha Water Service | Premium RO Water Delivery in Ariyalur</title>
        <meta name="description" content="Ensure your family's health with our 7-stage RO purified drinking water. Fast, reliable, and hygienic doorstep delivery across Ariyalur. Order 20L cans and bottles online." />
        <meta name="keywords" content="Water delivery Ariyalur, RO Water Can, Nivedha Water Service, 20L Water Can Delivery, Packaged Drinking Water, Ariyalur water supplier" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nivedha Water Service | Premium RO Water Delivery in Ariyalur" />
        <meta property="og:description" content="100% pure, 7-stage RO purified drinking water. Fast, reliable, and hygienic doorstep delivery across Ariyalur." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=1200&auto=format&fit=crop" />
        <meta property="og:url" content="https://nivedhawater.netlify.app" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nivedha Water Service | Premium RO Water Delivery in Ariyalur" />
        <meta name="twitter:description" content="100% pure, 7-stage RO purified drinking water. Fast, reliable, and hygienic doorstep delivery across Ariyalur." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=1200&auto=format&fit=crop" />

        {/* JSON-LD Schema for LocalBusiness */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Nivedha Water Service",
              "image": "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=1200&auto=format&fit=crop",
              "@id": "",
              "url": "https://nivedhawater.netlify.app",
              "telephone": "+918825940239",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ariyalur",
                "addressLocality": "Ariyalur",
                "addressRegion": "TN",
                "postalCode": "621704",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 11.1396,
                "longitude": 79.0766
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "07:00",
                "closes": "21:00"
              },
              "sameAs": [
                "https://nivedhawater.netlify.app"
              ] 
            }
          `}
        </script>
      </Helmet>
      <header className='hero'>
        <div className='hero-content'>
          <div className='badge-pill'><Zap size={14} /> Ariyalur's First Online Water Ordering Platform</div>
          <h1>100% Pure RO Water,<br />Delivered to Your Doorstep.</h1>
          <p>Protect your family's health with our 7-stage RO purified water. Enjoy fast, reliable, and perfectly hygienic delivery across Ariyalur.</p>
          <div className='hero-actions'>
            <button className='cta-btn primary-cta' onClick={() => navigate('/products')}>Order Now</button>
          </div>
        </div>
      </header>
    </>
  );
}
