import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import Progress from "../components/Progress";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  // ✅ Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    adreess: "",
  });

  // ✅ Payment State
  const [payment, setPayment] = useState("");

  // ✅ Totals
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const shipping = 200;
  const total = subtotal + shipping;

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Place order
  const placeOrder = async () => {
    const { name, phone, email, adreess } = formData;

    if (!name || !phone || !email || !adreess || !payment) {
      alert("Please fill all fields and select a payment method.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          address: adreess,
          payment,
          subtotal,
          shipping,
          total,
          cart,
        }),
      });

      if (response.ok) {
        localStorage.removeItem("cart");
        navigate("/thankyou");
      } else {
        alert("Order failed");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Server error");
    }
  };

  return (
    <div>
      <main className="main">
        <Progress currentStep={2} />

        <h2>Almost there! Just a few details to complete your order.</h2>

        {/* DELIVERY INFO */}
        <section className="delivery-info">
          <h3>Delivery Information</h3>
          <p className="guest-note">You are checking out as a guest.</p>

          <form>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Address</label>
            <input
              type="text"
              name="adreess"
              value={formData.adreess}
              onChange={handleChange}
            />

            <div className="save-info">
              <input type="checkbox" />
              <label>Save this for next time.</label>
            </div>
          </form>
        </section>

        <div className="check">
          {/* PAYMENT */}
          <div className="payment">
            <h4>Payment Options</h4>

            <label>
              <input
                type="radio"
                name="payment"
                onChange={() => setPayment("card")}
              />
              Credit / Debit Card
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                onChange={() => setPayment("easypaisa")}
              />
              Easypaisa
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                onChange={() => setPayment("cod")}
              />
              Cash on Delivery
            </label>
          </div>

          {/* ORDER SUMMARY */}
          <div className="summary">
            <h4>Order Summary</h4>

            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div className="summary-item" key={item.id}>
                  <div className="summary-left">
                    <img
                      src={`/images/${item.image}`}
                      alt={item.title}
                      className="summary-img"
                    />
                    <div>
                      <p><strong>{item.title}</strong></p>
                      <p>Qty: {item.qty}</p>
                    </div>
                  </div>
                  <p>Rs {item.price * item.qty}</p>
                </div>
              ))
            )}

            <hr />

            <p>
              Subtotal <span>Rs {subtotal}</span>
            </p>
            <p>
              Shipping Fee <span>Rs {shipping}</span>
            </p>

            <hr />

            <p className="total">
              Total <span>Rs {total}</span>
            </p>

            <button className="place-order" onClick={placeOrder}>
              Place Order
            </button>

            <p className="note">
              You will receive an email after placing the order.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
