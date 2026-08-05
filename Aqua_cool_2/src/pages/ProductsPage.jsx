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
        <title>Products | Nivedha Water Service</title>
        <meta name="description" content="Choose from our premium RO purified water packs. 20 Litre Cans, Bottles, and more." />
      </Helmet>
      <div className='page-spacer' />
      <section className='products-section'>
        <div className='section-header'>
          <div className='section-tag'>Our Products</div>
          <h2>Choose Your Pack</h2>
          <p>Premium RO purified water in sizes for every need.</p>
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
                <div key={idx} className='marquee-item'>
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
