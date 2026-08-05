import React, { memo } from 'react';
import { X, Navigation, Loader2, CheckCircle, MessageCircle } from 'lucide-react';

const AddressModal = memo(({
  isAddressModalOpen,
  setIsAddressModalOpen,
  gpsLink,
  gpsLoading,
  locationError,
  handleGetLocation,
  manualAddress,
  setManualAddress,
  handleConfirmOrder,
  deliveryFloor,
  setDeliveryFloor,
  has20LCan
}) => {
  const isFloorValid = has20LCan ? deliveryFloor !== '' : true;

  return (
    <div className={'address-modal-overlay ' + (isAddressModalOpen ? 'open' : '')} onClick={e => { if (e.target === e.currentTarget) setIsAddressModalOpen(false); }}>
      <div className='address-modal' role='dialog' aria-modal='true'>
        <div className='address-modal-header'>
          <div>
            <h3>Delivery Address</h3>
            <p className='modal-subtitle'>Please provide your location for a swift and accurate delivery.</p>
          </div>
          <button className='close-cart' onClick={() => setIsAddressModalOpen(false)}><X size={20} /></button>
        </div>
        <div className='address-modal-body'>
          <button className={'location-btn ' + (gpsLink ? 'success' : '')} onClick={handleGetLocation} disabled={gpsLoading}>
            {gpsLoading ? <Loader2 size={20} className='spinner' /> : gpsLink ? <CheckCircle size={20} /> : <Navigation size={20} />}
            {gpsLoading ? 'Locating you...' : gpsLink ? 'Location Secured ✓' : 'Use My Current Location'}
          </button>
          {locationError && <p className='location-error'>⚠ {locationError}</p>}
          <div className='divider'><span>OR</span></div>
          <label className='address-label' htmlFor='manual-address'>Enter Address Manually</label>
          <textarea id='manual-address' className='address-textarea' placeholder='e.g. Door No. 12, Gandhi Street, Ariyalur - 621704' value={manualAddress} onChange={e => setManualAddress(e.target.value)} rows='3' />
          
          {has20LCan && (
            <>
              <div className='divider'><span>DELIVERY FLOOR</span></div>
              <label className='address-label' htmlFor='delivery-floor'>Delivery Floor <span style={{color: 'red'}}>*</span></label>
              <select id='delivery-floor' className='address-select' value={deliveryFloor} onChange={e => setDeliveryFloor(e.target.value === '' ? '' : Number(e.target.value))}>
                <option value="" disabled>-- Select Delivery Floor --</option>
                <option value={0}>Ground Floor (No extra charge)</option>
                <option value={1}>1st Floor (₹5 extra per 20L Can)</option>
                <option value={2}>2nd Floor (₹10 extra per 20L Can)</option>
                <option value={3}>3rd Floor (₹15 extra per 20L Can)</option>
                <option value={4}>4th Floor (₹20 extra per 20L Can)</option>
                <option value={5}>5th Floor (₹25 extra per 20L Can)</option>
              </select>
              {deliveryFloor === '' && <p className='location-error' style={{marginTop: '-5px', marginBottom: '10px', fontSize: '0.85rem'}}>⚠ Please specify the delivery floor for your 20L Can(s).</p>}
            </>
          )}

          <button className='confirm-order-btn' style={{ marginTop: '10px' }} onClick={handleConfirmOrder} disabled={(!gpsLink && !manualAddress.trim()) || !isFloorValid}>
            <MessageCircle size={18} /> Confirm & Send Order
          </button>
        </div>
      </div>
    </div>
  );
});

export default AddressModal;
