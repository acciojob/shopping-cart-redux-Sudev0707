import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  addToWishlist,
  removeFromWishlist,
  applyCoupon,
} from "../redux/actions";

import "./../styles/App.css";

const products = [
  {
    id: 1,
    name: "Blue Denim Shirt",
    category: "SHIRT - BLUE",
    price: 1799,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300",
  },
  {
    id: 2,
    name: "Red Hoodie",
    category: "HOODIE - RED",
    price: 3599,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300",
  },
  {
    id: 3,
    name: "Navy T-Shirt",
    category: "TSHIRT - NAVY",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
  },
  {
    id: 4,
    name: "Black Chino Pants",
    category: "CHINO PANTS - BLACK",
    price: 6999,
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300",
  },
];

const App = () => {
  const dispatch = useDispatch();

  const { cart, wishlist, discount } = useSelector(
    (state) => state
  );

  const [coupon, setCoupon] = useState("");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal - (subtotal * discount) / 100;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleMoveToWishlist = (item) => {
    dispatch(removeFromCart(item.id));
    dispatch(addToWishlist(item));
  };

  return (
    <div className="app-container">
      {/* FIRST ROW - Products Section */}
      <div className="products-section">
        <h1 className="section-title">All Products</h1>
        <p className="section-subtitle">Available items to order</p>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h4 className="product-name">{product.name}</h4>
                <p className="product-category">{product.category}</p>
                <p className="product-price">₹ {product.price}</p>
                <div className="product-buttons">
                  <button
                    className="add-btn"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add To Cart
                  </button>
                  <button
                    className="wishlist-btn"
                    onClick={() => dispatch(addToWishlist(product))}
                  >
                    ♡ Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-row">
        <div className="cart-items-section">
          <h2 className="section-title">Cart Items ({cart.length}) </h2>
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart-item-card" key={item.id}>

                <div className="cart-item-info">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">₹ {item.price}</p>

                    <div className="cart-item-buttons">
                      <button
                        className="remove-cart-btn"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove
                      </button>
                      <button
                        className="move-wishlist-btn"
                        onClick={() => handleMoveToWishlist(item)}
                      >
                        Move to Wishlist
                      </button>
                    </div>

                  </div>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(decreaseQty(item.id))}
                    >
                      -
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(increaseQty(item.id))}
                    >
                      +
                    </button>
                  </div>

                </div>

              </div>
            ))
          )}
        </div>

        <div>
          <div className="cart-summary">
            <div className="summary-card">
              <div className="summary-row">
                <span>Total Items:</span>
                <strong>{totalItems}</strong>
              </div>
              <div className="summary-row">
                <span>Subtotal:</span>
                <strong>₹{subtotal}</strong>
              </div>
              <div className="summary-row discount-row">
                <span>Discount:</span>
                <strong>{discount}%</strong>
              </div>
              <div className="summary-row total-row">
                <span>Total Amount:</span>
                <strong>₹{total}</strong>
              </div>
              <div>
                <button
                  className="checkout-btn"
                >
                  Go to Checkout
                </button>
              </div>


            </div>
          </div>
          <div className="coupon-section">
            <input
              type="text"
              value={coupon}
              placeholder="Enter coupon code"
              onChange={(e) => setCoupon(e.target.value)}
              className="coupon-input"
            />
            <button
              className="apply-coupon-btn"
              onClick={() => dispatch(applyCoupon(coupon))}
            >
              Apply Coupon
            </button>
          </div>

        </div>


      </div>

      {/* THIRD ROW - Wishlist Section */}
      <div className="wishlist-section">
        <h2 className="section-title">Wishlist</h2>
        {wishlist.length === 0 ? (
          <div className="empty-wishlist">
            <p>No items in wishlist</p>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlist.map((item) => (
              <div className="wishlist-card" key={item.id}>
                <div className="wishlist-info">
                  <span className="wishlist-name">{item.name}</span>
                  <span className="wishlist-price">₹ {item.price}</span>
                </div>
                <div className="wishlist-actions">
                  <button
                    className="move-to-cart-btn"
                    onClick={() => {
                      dispatch(addToCart(item));
                      dispatch(removeFromWishlist(item.id));
                    }}
                  >
                    Move to Cart
                  </button>
                  <button
                    className="remove-wishlist-btn"
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;