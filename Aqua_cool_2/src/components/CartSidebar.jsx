import React, { memo } from 'react';
import { ShoppingCart, X, Plus, Minus, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../constants/data';

const CartSidebar = memo(({ isCartOpen, setIsCartOpen, cart, updateQuantity, setCart, openAddressModal }) => {
  const navigate = useNavigate();
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const grandTotal = products.reduce((t, p) => t + (cart[p.id] || 0) * p.price, 0);

  return (
    <>
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
              <h4>Your Cart is Empty</h4>
              <p>Add some refreshing water packs to get started!</p>
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
                      <p className='cart-item-price'>₹{p.price} {p.unitText || '/ unit'}</p>
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
    </>
  );
});

export default CartSidebar;
