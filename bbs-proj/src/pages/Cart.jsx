import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Progress from "../components/Progress";

const Cart = () => {
  const { cart, updateQty, subtotal } = useCart();
  const navigate = useNavigate();

  const shipping = 200;
  const total = subtotal + shipping;

  return (
    <main className="cart-section">
      <Progress currentStep={1} />

      <h2>Your Creative Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-itm">
            <p>{item.title}</p>
            <p>Rs {item.price * item.qty}</p>

            <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
          </div>
        ))
      )}

      <p>Subtotal: Rs {subtotal}</p>
      <p>Shipping: Rs {shipping}</p>
      <h3>Total: Rs {total}</h3>

      <button onClick={() => navigate("/checkout")}>Checkout</button>
    </main>
  );
};

export default Cart;
