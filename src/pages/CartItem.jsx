import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import {
  selectCartItems,
  selectTotalItems,
  selectTotalCost,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../features/cart/CartSlice.jsx';
import placeholderImage from '../assets/plant-placeholder.svg';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalCost = useSelector(selectTotalCost);
  const [showCheckoutMessage, setShowCheckoutMessage] = useState(false);

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="cart-empty">
        <span className="cart-empty-icon" aria-hidden="true">
          &#127814;
        </span>
        <h2>Your cart is empty</h2>
        <p>Browse our houseplants and add a few leafy friends to your basket.</p>
        <Link to="/products" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="cart-page">
      <h1 className="cart-title">Shopping Cart</h1>

      <div className="cart-summary">
        <p>
          <strong>{totalItems}</strong> plant{totalItems === 1 ? '' : 's'} in your
          cart
        </p>
        <p className="cart-total-cost">
          Total: <strong>${totalCost.toFixed(2)}</strong>
        </p>
      </div>

      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <img
              className="cart-item-image"
              src={item.thumbnail}
              alt={item.name}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = placeholderImage;
              }}
            />
            <div className="cart-item-info">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">Unit price: ${item.price.toFixed(2)}</p>
            </div>

            <div className="cart-item-qty">
              <button
                type="button"
                className="qty-btn"
                aria-label={`Decrease quantity of ${item.name}`}
                onClick={() => dispatch(decreaseQuantity(item.id))}
              >
                &minus;
              </button>
              <span className="qty-value">{item.qty}</span>
              <button
                type="button"
                className="qty-btn"
                aria-label={`Increase quantity of ${item.name}`}
                onClick={() => dispatch(increaseQuantity(item.id))}
              >
                +
              </button>
            </div>

            <p className="cart-item-line-total">
              ${(item.qty * item.price).toFixed(2)}
            </p>

            <button
              type="button"
              className="btn btn-delete"
              aria-label={`Remove ${item.name} from cart`}
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-actions">
        <Link to="/products" className="btn btn-secondary">
          Continue Shopping
        </Link>
        <button
          type="button"
          className="btn btn-primary btn-checkout"
          onClick={() => setShowCheckoutMessage(true)}
        >
          Checkout
        </button>
      </div>

      {showCheckoutMessage && (
        <p className="checkout-message" role="status">
          &#128640; Checkout is coming soon — please check back later!
        </p>
      )}
      </div>
    </>
  );
}