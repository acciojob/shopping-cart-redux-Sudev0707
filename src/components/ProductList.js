import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/wishlistSlice';

const products = [
  { id: 1, name: 'Laptop', price: 999, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Phone', price: 499, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Headphones', price: 99, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Keyboard', price: 79, image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            <button onClick={() => dispatch(addToWishlist(product))}>Add to Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;