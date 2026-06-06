import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appliedCoupon: null,
  discountPercentage: 0,
};

const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {
    applyCoupon: (state, action) => {
      const coupon = action.payload;
      if (coupon.code === 'SAVE10') {
        state.appliedCoupon = coupon.code;
        state.discountPercentage = 10;
      } else if (coupon.code === 'SAVE20') {
        state.appliedCoupon = coupon.code;
        state.discountPercentage = 20;
      } else {
        state.appliedCoupon = null;
        state.discountPercentage = 0;
      }
    },
    removeCoupon: (state) => {
      state.appliedCoupon = null;
      state.discountPercentage = 0;
    },
  },
});

export const { applyCoupon, removeCoupon } = discountSlice.actions;
export default discountSlice.reducer;