import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

import { WHATSAPP_NUMBER, products } from './constants/data';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import AddressModal from './components/AddressModal';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function MainApp() {
  // Initialize cart from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('nivedha_cart');
      return savedCart ? JSON.parse(savedCart) : {};
    } catch {
      return {};
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsLink, setGpsLink] = useState('');
  const [manualAddress, setManualAddress] = useState('');
  const [locationError, setLocationError] = useState('');

  const [deliveryFloor, setDeliveryFloor] = useState('');

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isNavbarSolid = scrolled || !isHomePage;

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('nivedha_cart', JSON.stringify(cart));
  }, [cart]);

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
      
      // Toast notification for adding to cart
      if (delta > 0 && newQty === 1) {
        const product = products.find(p => p.id === productId);
        if (product) toast.success(`${product.name} added to cart!`);
      }

      if (newQty === 0) { const next = { ...prev }; delete next[productId]; return next; }
      return { ...prev, [productId]: newQty };
    });
  }, [isCartOpen]);

  const openAddressModal = () => {
    setIsCartOpen(false);
    setGpsLink(''); setManualAddress(''); setLocationError('');
    setDeliveryFloor('');
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
    let num20LCans = 0;
    
    let message = 'Hello Nivedha Water Service,%0A%0AI would like to place an order for water delivery. Here are my details:%0A%0A*Order Details:*%0A----------------------%0A';
    products.forEach(p => {
      if (cart[p.id]) {
        const qty = cart[p.id]; const cost = parseFloat((qty * p.price).toFixed(2)); total += cost;
        message += '🔹 ' + p.name + ' x' + qty + ' = %E2%82%B9' + cost.toFixed(2) + '%0A';
        if (p.id === 1) num20LCans = qty; // 20L can ID is 1
      }
    });
    
    // Calculate Floor Delivery Charge
    const floor = Number(deliveryFloor) || 0;
    const floorCharge = num20LCans * floor * 5;
    if (floorCharge > 0) {
      message += `🔹 Floor Delivery Charge (${floor} Floor${floor > 1 ? 's' : ''}) = %E2%82%B9${floorCharge}%0A`;
      total += floorCharge;
    }
    
    message += '----------------------%0A*Total Payable: %E2%82%B9' + total.toFixed(2) + '*%0A';
    message += '%0A*Delivery Information:*%0A';
    message += '🏢 Delivery Floor: ' + (deliveryFloor === '' ? 'Not Specified' : (floor === 0 ? 'Ground Floor' : `${floor} Floor`)) + '%0A';
    if (gpsLink) message += '%F0%9F%93%8D Location: ' + encodeURIComponent(gpsLink) + '%0A';
    if (manualAddress.trim()) message += '%F0%9F%8F%A0 Address: ' + encodeURIComponent(manualAddress.trim()) + '%0A';
    message += '%0APlease confirm my order and let me know the estimated delivery time. Thank you!';
    message += '%0A%0A%23NivedhaWater%20%23PureWater%20%23ROWater%20%23Ariyalur%20%23WaterDelivery%20%23HealthyLiving';
    
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + message, '_blank');
    setIsAddressModalOpen(false);
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const has20LCan = !!cart[1];

  return (
    <div className='app-container'>
      <ScrollToTop />
      <Toaster position="bottom-center" />
      
      <Navbar 
        isNavbarSolid={isNavbarSolid} 
        isHomePage={isHomePage} 
        setIsCartOpen={setIsCartOpen} 
        totalItems={totalItems} 
      />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage cart={cart} updateQuantity={updateQuantity} />} />
        </Routes>
      </main>

      <CartSidebar 
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        updateQuantity={updateQuantity}
        setCart={setCart}
        openAddressModal={openAddressModal}
      />

      <AddressModal 
        isAddressModalOpen={isAddressModalOpen}
        setIsAddressModalOpen={setIsAddressModalOpen}
        gpsLink={gpsLink}
        gpsLoading={gpsLoading}
        locationError={locationError}
        handleGetLocation={handleGetLocation}
        manualAddress={manualAddress}
        setManualAddress={setManualAddress}
        handleConfirmOrder={handleConfirmOrder}
        deliveryFloor={deliveryFloor}
        setDeliveryFloor={setDeliveryFloor}
        has20LCan={has20LCan}
      />

      <Footer isHomePage={isHomePage} />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </HelmetProvider>
  );
}