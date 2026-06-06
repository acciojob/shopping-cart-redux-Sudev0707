import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const discountPercentage = useSelector(state => state.discount.discountPercentage);

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const discountAmount = (subtotal * discountPercentage) / 100;
  const total = subtotal - discountAmount;

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price}</span>
              <div className="quantity-controls">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            {discountPercentage > 0 && (
              <p>Discount ({discountPercentage}%): -${discountAmount.toFixed(2)}</p>
            )}
            <p><strong>Total: ${total.toFixed(2)}</strong></p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;