import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Truck, Droplets, Star, MessageCircle, Award, Clock, Zap } from 'lucide-react';
import { products, features } from '../constants/data';
import ProductCard from '../components/ProductCard';

const iconMap = { ShieldCheck, Truck, Droplets, Star, MessageCircle, Award, Clock, Zap };

export default function ProductsPage({ cart, updateQuantity }) {
  return (
    <>
      <Helmet>
        <title>Our Products | Nivedha Water Service</title>
        <meta name="description" content="Choose from our premium RO purified water packs. Order 20 Litre Cans, 1 Litre Bottles, 500ml Bottles, and more online for fast delivery in Ariyalur." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Products | Nivedha Water Service" />
        <meta property="og:description" content="Choose from our premium RO purified water packs. Fast doorstep delivery in Ariyalur." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=1200&auto=format&fit=crop" />
        <meta property="og:url" content="https://nivedhawater.netlify.app/products" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Products | Nivedha Water Service" />
        <meta name="twitter:description" content="Choose from our premium RO purified water packs. Fast doorstep delivery in Ariyalur." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=1200&auto=format&fit=crop" />
      </Helmet>
      <div className='page-spacer' />
      <section className='products-section'>
        <div className='section-header'>
          <div className='section-tag'>Our Products</div>
          <h2>Choose Your Perfect Pack</h2>
          <p>Premium RO-purified water, available in sizes tailored to your everyday needs.</p>
        </div>
        <div className='products-grid'>
          {products.map(product => {
            const qty = cart[product.id] || 0;
            return (
              <ProductCard 
                key={product.id} 
                product={product} 
                qty={qty} 
                updateQuantity={updateQuantity} 
              />
            );
          })}
        </div>
      </section>
      <section className='features-slider-section'>
        <div className='section-header light'>
          <div className='section-tag light'>Why Nivedha?</div>
          <h2>Why Choose Nivedha Water?</h2>
        </div>
        <div className='marquee-container'>
          <div className='marquee-track'>
            {[...features, ...features].map((f, idx) => {
              const IconComp = iconMap[f.icon];
              return (
                <div key={f.icon + '-' + idx} className='marquee-item'>
                  <div className='slide-card'>
                    <div className='feature-icon'>{IconComp && <IconComp size={32} />}</div>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
