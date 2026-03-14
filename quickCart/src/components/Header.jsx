import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../Styles/Header.css";

function Header({ searchTerm, onSearchChange }) {

  const { getTotalItems, toggleCart } = useCart();

  const categories = ["Electronics", "Accessories", "Home", "Sports"];


  return (
    <header className="header">
      <div className="header-container">
         <div className="header-top">

          <Link to="/">
            <h1 className="header-title">🛒 QuickCart</h1>
          </Link>

          <button
            className="cart-icon-btn"
            oonClick={toggleCart}
          >
            🛒

            {getTotalItems() > 0 && (
              <span className="cart-badge">
                {getTotalItems()}
              </span>
            )}

          </button>

        </div>
      
 <nav className="header-nav">

          <Link to="/">Home</Link>

          {categories.map(cat => (

            <Link
              key={cat}
              to={`/category/${cat}`}
            >
              {cat}
            </Link>

          ))}

          <Link to="/cart">Cart</Link>

        </nav>

        <div className="search-container">

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
          />

        </div>

      </div>

    </header>
  );
}

export default Header;