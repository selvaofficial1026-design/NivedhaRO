import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';
import {
  ShoppingCart, X, Plus, Minus, Droplets, Truck, ShieldCheck,
  MapPin, Phone, MessageCircle, Star, Navigation, Loader2, Award,
  CheckCircle, Clock, Zap
} from 'lucide-react';
import './index.css';

const WHATSAPP_NUMBER = '918668102797';

const products = [
  { id: 1, name: '20 Litre Can',   price: 40, image: '/images/nivedha_water_20l_can_1785852899253.jpg',    badge: 'Best Seller' },
  { id: 2, name: '2 Litre Bottle', price: 20, image: '/images/nivedha_water_2l_bottle_1785852909619.jpg',  badge: null },
  { id: 3, name: '1 Litre Bottle', price: 12, image: '/images/nivedha_water_1l_bottle_1785852926112.jpg',  badge: 'Popular' },
  { id: 4, name: '500 ml Bottle',  price: 8,  image: '/images/nivedha_water_500ml_bottle_1785852949159.jpg', badge: null },
  { id: 5, name: '300 ml Bottle',  price: 5,  image: '/images/nivedha_water_300ml_bottle_1785852961551.jpg', badge: null },
];

const features = [
  { icon: 'ShieldCheck', title: '7-Stage RO Purified',    desc: 'Advanced RO + UV tech ensures 100% germ-free water.' },
  { icon: 'Truck',       title: 'Same-Day Delivery',      desc: 'Fast doorstep delivery across all of Ariyalur.' },
  { icon: 'Droplets',    title: 'Added Minerals',         desc: 'Enriched with Calcium & Magnesium for a crisp taste.' },
  { icon: 'Star',        title: 'Strict Quality Control', desc: 'Every batch is lab-tested to the highest standards.' },
  { icon: 'MessageCircle', title: 'Easy WhatsApp Order', desc: 'One click to order — no apps, no hassle.' },
  { icon: 'Award',       title: 'Trusted in Ariyalur',   desc: 'Hundreds of happy families served every day.' },
  { icon: 'Clock',       title: '24/7 Availability',     desc: 'Order anytime — we are always ready to deliver.' },
  { icon: 'Zap',         title: 'Affordable Prices',     desc: 'Premium quality water at the most competitive prices.' },
];

const iconMap = { ShieldCheck, Truck, Droplets, Star, MessageCircle, Award, Clock, Zap };

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function HomePage() {
  const navigate = useNavigate();
  return (
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
  );
}

function ProductsPage({ cart, updateQuantity }) {
  return (
    <>
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
              <div key={product.id} className='product-card'>
                {product.badge && <span className='product-badge'>{product.badge}</span>}
                <div className='product-img-wrapper'>
                  <img src={product.image} alt={product.name} className='product-img' loading='lazy' />
                </div>
                <div className='product-info'>
                  <h3 className='product-title'>{product.name}</h3>
                  <div className='product-price'>₹{product.price} <span className='per-unit'>/ unit</span></div>
                </div>
                {qty > 0 ? (
                  <div className='quantity-controls'>
                    <button className='qty-btn' onClick={() => updateQuantity(product.id, -1)} aria-label='Decrease'><Minus size={16} /></button>
                    <span className='qty-value'>{qty}</span>
                    <button className='qty-btn' onClick={() => updateQuantity(product.id, 1)} aria-label='Increase'><Plus size={16} /></button>
                  </div>
                ) : (
                  <button className='add-btn' onClick={() => updateQuantity(product.id, 1)}>
                    <Plus size={16} /> Add to Cart
                  </button>
                )}
              </div>
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

function MainApp() {
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsLink, setGpsLink] = useState('');
  const [manualAddress, setManualAddress] = useState('');
  const [locationError, setLocationError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isNavbarSolid = scrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsCartOpen(false); }, [location.pathname]);

  const updateQuantity = useCallback((productId, delta) => {
    if (delta > 0 && !isCartOpen) setIsCartOpen(true);
    setCart(prev => {
      const newQty = Math.max(0, (prev[productId] || 0) + delta);
      if (newQty === 0) { const next = { ...prev }; delete next[productId]; return next; }
      return { ...prev, [productId]: newQty };
    });
  }, [isCartOpen]);

  const openAddressModal = () => {
    setIsCartOpen(false);
    setGpsLink(''); setManualAddress(''); setLocationError('');
    setIsAddressModalOpen(true);
  };

  const handleGetLocation = () => {
    setGpsLoading(true); setLocationError(''); setGpsLink('');
    if (!navigator.geolocation) {
      setLocationError('GPS not supported. Please type your address manually.');
      setGpsLoading(false); return;
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { setGpsLink('https://maps.google.com/?q=' + coords.latitude + ',' + coords.longitude); setGpsLoading(false); },
      () => { setLocationError('Could not get location. Please type your address.'); setGpsLoading(false); }
    );
  };

  const handleConfirmOrder = () => {
    if (Object.keys(cart).length === 0) return;
    let total = 0;
    let message = 'Greetings Nivedha Water Service,%0A%0AI would like to place an order for water delivery. Please find the details below:%0A%0A*Order Details:*%0A----------------------%0A';
    products.forEach(p => {
      if (cart[p.id]) {
        const qty = cart[p.id]; const cost = qty * p.price; total += cost;
        message += '🔹 ' + p.name + '  |  Qty: ' + qty + '  |  %E2%82%B9' + cost + '%0A';
      }
    });
    message += '----------------------%0A*Total Amount Payable: %E2%82%B9' + total + '*%0A';
    message += '%0A*Delivery Information:*%0A';
    if (gpsLink) message += '%F0%9F%93%8D Location: ' + encodeURIComponent(gpsLink) + '%0A';
    if (manualAddress.trim()) message += '%F0%9F%8F%A0 Address: ' + encodeURIComponent(manualAddress.trim()) + '%0A';
    message += '%0APlease confirm the receipt of this order and let me know the estimated delivery time.%0A%0AThank you.';
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + message, '_blank');
    setIsAddressModalOpen(false);
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const grandTotal = products.reduce((t, p) => t + (cart[p.id] || 0) * p.price, 0);

  return (
    <div className='app-container'>
      <ScrollToTop />
      <nav className={'navbar ' + (isNavbarSolid ? 'scrolled' : '')} role='navigation'>
        <Link to='/' className='brand'>
          <Droplets size={28} className='brand-icon' /> Nivedha <span>Water</span>
        </Link>
        {!isHomePage && (
          <button className='cart-icon-wrapper' onClick={() => setIsCartOpen(true)} aria-label='Open cart'>
            <ShoppingCart size={22} />
            {totalItems > 0 && <span className='cart-count'>{totalItems}</span>}
          </button>
        )}
      </nav>

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage cart={cart} updateQuantity={updateQuantity} />} />
        </Routes>
      </main>

      <div className={'cart-overlay ' + (isCartOpen ? 'open' : '')} onClick={() => setIsCartOpen(false)} />

      <aside className={'sidebar-cart ' + (isCartOpen ? 'open' : '')} aria-label='Shopping cart'>
        <div className='cart-header'>
          <div className='cart-header-info'>
            <h3>Your Cart</h3>
            {totalItems > 0 && <span className='cart-header-count'>{totalItems} item{totalItems > 1 ? 's' : ''}</span>}
          </div>
          <button className='close-cart' onClick={() => setIsCartOpen(false)} aria-label='Close'><X size={20} /></button>
        </div>
        <div className='cart-body'>
          {totalItems === 0 ? (
            <div className='empty-cart'>
              <div className='empty-cart-icon'><ShoppingCart size={48} /></div>
              <h4>Your cart is empty</h4>
              <p>Add some water products to get started!</p>
              <button className='continue-shopping' onClick={() => { setIsCartOpen(false); navigate('/products'); }}>Browse Products</button>
            </div>
          ) : (
            <div className='cart-items'>
              {products.map(p => {
                if (!cart[p.id]) return null;
                return (
                  <div key={p.id} className='cart-item'>
                    <img src={p.image} alt={p.name} className='cart-item-img' />
                    <div className='cart-item-details'>
                      <h4>{p.name}</h4>
                      <p className='cart-item-price'>₹{p.price} / unit</p>
                      <div className='mini-qty-controls'>
                        <button onClick={() => updateQuantity(p.id, -1)}><Minus size={13} /></button>
                        <span>{cart[p.id]}</span>
                        <button onClick={() => updateQuantity(p.id, 1)}><Plus size={13} /></button>
                      </div>
                    </div>
                    <div className='cart-item-right'>
                      <div className='cart-item-total'>₹{cart[p.id] * p.price}</div>
                      <button className='cart-item-remove' onClick={() => setCart(prev => { const n = { ...prev }; delete n[p.id]; return n; })}><X size={14} /></button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {totalItems > 0 && (
          <div className='cart-footer'>
            <div className='cart-total'><span>Grand Total</span><span className='cart-total-amount'>₹{grandTotal}</span></div>
            <button className='order-btn' onClick={openAddressModal}><MessageCircle size={20} /> Order via WhatsApp</button>
          </div>
        )}
      </aside>

      <div className={'address-modal-overlay ' + (isAddressModalOpen ? 'open' : '')} onClick={e => { if (e.target === e.currentTarget) setIsAddressModalOpen(false); }}>
        <div className='address-modal' role='dialog' aria-modal='true'>
          <div className='address-modal-header'>
            <div>
              <h3>Delivery Address</h3>
              <p className='modal-subtitle'>We need your location for accurate delivery.</p>
            </div>
            <button className='close-cart' onClick={() => setIsAddressModalOpen(false)}><X size={20} /></button>
          </div>
          <div className='address-modal-body'>
            <button className={'location-btn ' + (gpsLink ? 'success' : '')} onClick={handleGetLocation} disabled={gpsLoading}>
              {gpsLoading ? <Loader2 size={20} className='spinner' /> : gpsLink ? <CheckCircle size={20} /> : <Navigation size={20} />}
              {gpsLoading ? 'Getting Location...' : gpsLink ? 'Location Captured ✓' : 'Use My Current Location'}
            </button>
            {locationError && <p className='location-error'>⚠ {locationError}</p>}
            <div className='divider'><span>OR</span></div>
            <label className='address-label' htmlFor='manual-address'>Type Address Manually</label>
            <textarea id='manual-address' className='address-textarea' placeholder='e.g. Door No. 12, Gandhi Street, Ariyalur - 621704' value={manualAddress} onChange={e => setManualAddress(e.target.value)} rows='3' />
            <button className='confirm-order-btn' onClick={handleConfirmOrder} disabled={!gpsLink && !manualAddress.trim()}>
              <MessageCircle size={18} /> Confirm & Send Order
            </button>
          </div>
        </div>
      </div>

      {isHomePage && (
      <footer>
        <div className='footer-content'>
          <div className='footer-brand'>
            <h2><Droplets size={22} /> Nivedha <span>Water</span></h2>
            <p>Premium purity in every drop. Delivering health and hydration across Ariyalur since day one.</p>
            <a className='footer-whatsapp' href={'https://wa.me/' + WHATSAPP_NUMBER} target='_blank' rel='noreferrer'>
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
          
          <div className='footer-contact'>
            <h3>Contact Us</h3>
            <p><Phone size={15} /> +91 86681 02797</p>
            <p><MapPin size={15} /> Located & Serving in Ariyalur</p>
            <p><Clock size={15} /> Open Daily — 7 AM to 9 PM</p>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>© {new Date().getFullYear()} Nivedha Water Service, Ariyalur. All rights reserved.</p>
        </div>
      </footer>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}