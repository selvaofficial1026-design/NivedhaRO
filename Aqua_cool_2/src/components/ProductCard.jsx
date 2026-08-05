import React, { memo } from 'react';
import { Plus, Minus } from 'lucide-react';

const ProductCard = memo(({ product, qty, updateQuantity }) => {
  return (
    <div className='product-card'>
      {product.badge && <span className='product-badge'>{product.badge}</span>}
      <div className='product-img-wrapper'>
        <img src={product.image} alt={product.name} className='product-img' loading='lazy' />
      </div>
      <div className='product-info'>
        <h3 className='product-title'>{product.name}</h3>
        <div className='product-price'>₹{product.price} <span className='per-unit'>{product.unitText || '/ unit'}</span></div>
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
});

export default ProductCard;
