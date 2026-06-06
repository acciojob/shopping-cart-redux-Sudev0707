import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);

  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Wishlist is empty</p>
      ) : (
        wishlistItems.map(item => (
          <div key={item.id} className="wishlist-item">
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            <button onClick={() => dispatch(removeFromWishlist(item.id))}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;