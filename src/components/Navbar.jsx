import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../features/cart/CartSlice.jsx';

export default function Navbar() {
  const totalItems = useSelector(selectTotalItems);

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-brand">
        <span className="brand-leaf" aria-hidden="true">
          &#127807;
        </span>
        <span>Paradise Nursery</span>
      </NavLink>

      <nav className="navbar-links" aria-label="Primary">
        <NavLink to="/" className="nav-link" end>
          Home
        </NavLink>
        <NavLink to="/products" className="nav-link">
          Plants
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/cart" className="nav-link nav-cart" aria-label="Shopping cart">
          <svg
            className="cart-icon"
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="21" r="1.5" />
            <circle cx="19" cy="21" r="1.5" />
            <path d="M2.5 3h2l2.6 12.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L21.5 7H6" />
          </svg>
          <span className="cart-label">Cart</span>
          <span className="cart-badge" data-testid="cart-badge">
            {totalItems}
          </span>
        </NavLink>
      </nav>
    </header>
  );
}