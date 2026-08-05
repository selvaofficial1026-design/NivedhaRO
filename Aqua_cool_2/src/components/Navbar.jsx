import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Droplets, ShoppingCart } from 'lucide-react';

const Navbar = memo(({ isNavbarSolid, isHomePage, setIsCartOpen, totalItems }) => {
  return (
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
  );
});

export default Navbar;
