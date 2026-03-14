import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../Styles/CartPage.css";

function CartPage() {

  const {
    cart,
    updateQuantity,
    removeFromCart,
    getTotalPrice
  } = useCart();

  if (cart.length === 0) {

    return (
      <div className="empty-cart-page">

        <h2>Your cart is empty</h2>

        <Link to="/">Continue Shopping</Link>

      </div>
    );
  }

  return (

    <div className="cart-page">

      <h1>Shopping Cart</h1>

      {cart.map(item => (

        <div key={item.id} className="cart-page-item">

          {/* PRODUCT IMAGE */}
          <img
            src={item.image}
            alt={item.name}
          />

          <div>

            <h3>{item.name}</h3>

            <p>${item.price}</p>

            <div>

              <button
                onClick={() =>
                  updateQuantity(item.id, item.quantity - 1)
                }
              >
                -
              </button>

              {item.quantity}

              <button
                onClick={() =>
                  updateQuantity(item.id, item.quantity + 1)
                }
              >
                +
              </button>

            </div>

            <button
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>

          </div>

        </div>
        

      ))}

      <h2>Total: ${getTotalPrice().toFixed(2)}</h2>

    </div>
  );
}

export default CartPage;