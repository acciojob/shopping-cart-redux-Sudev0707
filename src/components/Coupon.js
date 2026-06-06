import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyCoupon, removeCoupon } from '../redux/discountSlice';

const Coupon = () => {
  const [couponCode, setCouponCode] = useState('');
  const dispatch = useDispatch();
  const appliedCoupon = useSelector(state => state.discount.appliedCoupon);

  const handleApplyCoupon = () => {
    dispatch(applyCoupon({ code: couponCode }));
    setCouponCode('');
  };

  return (
    <div className="coupon">
      <h3>Apply Coupon</h3>
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Enter coupon code"
      />
      <button onClick={handleApplyCoupon}>Apply</button>
      {appliedCoupon && (
        <div className="applied-coupon">
          <p>Coupon {appliedCoupon} applied! {appliedCoupon === 'SAVE10' ? '10%' : '20%'} off</p>
          <button onClick={() => dispatch(removeCoupon())}>Remove Coupon</button>
        </div>
      )}
    </div>
  );
};

export default Coupon;