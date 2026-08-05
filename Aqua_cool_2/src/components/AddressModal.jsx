import React from 'react';
import { X, Navigation, Loader2, CheckCircle, MessageCircle } from 'lucide-react';

export default function AddressModal({
  isAddressModalOpen,
  setIsAddressModalOpen,
  gpsLink,
  gpsLoading,
  locationError,
  handleGetLocation,
  manualAddress,
  setManualAddress,
  handleConfirmOrder
}) {
  return (
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
  );
}
