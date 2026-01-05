import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "/src/components/header";
import Footer from "/src/components/footer";
import "./Cart.css";
import { useCart } from "../context/CartContext";
import Progress from "../components/Progress";



const Cart = () => {
  
  const navigate = useNavigate();


  const { cart, increaseQty, decreaseQty } = useCart();

  
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const shipping = 200;
  const total = subtotal + shipping;

  return (
    <div>
  
      <main className="cart-section">
        <Progress currentStep={1} />

        <h2>Your Creative Cart</h2>
        <p className="sub-text">
          Your handmade crafts are ready to be made and delivered.
        </p>

        <div className="cart-container">
          {/* LEFT SIDE */}
          <div className="left-side">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="item-info">
                    <div className="item-img">
                
                      <img
                        src={`/images/${item.image}`}
                        className="image"
                        alt={item.title}
                      />
                    </div>

                    <div className="item-details">
                      <p><strong>{item.title}</strong></p>
                      <p>Quantity: {item.qty}</p>
                      <p><strong>Rs {item.price * item.qty}</strong></p>
                    </div>
                  </div>

                
                  <div className="box">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <input type="text" value={item.qty} disabled />
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="right">
            <div className="note">
              <input type="text" placeholder="Enter your note." />
              <button>Add</button>
            </div>

            <div className="order-detail">
              <p>
                Subtotal <span>Rs {subtotal}</span>
              </p>
              <p>
                Shipping Fee <span>Rs {shipping}</span>
              </p>
              <hr />
              <p className="total">
                Total Amount <span>Rs {total}</span>
              </p>
            </div>

            <button
              className="Checkout"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </div>
      </main>

   
    </div>
  );
};

export default Cart;
