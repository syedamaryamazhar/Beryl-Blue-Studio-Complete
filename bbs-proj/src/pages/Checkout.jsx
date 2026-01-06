import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import Progress from "../components/Progress";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "", 
  });

  const [payment, setPayment] = useState("");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const shipping = 200;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const placeOrder = async () => {
    const { name, phone, email, address } = formData;

    if (!name || !phone || !email || !address || !payment) {
      alert("Please fill all fields and select a payment method.");
      return;
    }

    if (payment === "card" || payment === "easypaisa") {
      navigate("/payment", {
        state: {
          payment: payment,
          customer: formData 
        }
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          address, 
          payment,
          subtotal,
          shipping,
          total,
          cart
        }),
      });

      if (response.ok) {
        navigate("/thankyou");
        window.location.reload();
        
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

        <section className="delivery-info">
          <h3>Delivery Information</h3>
          <p className="guest-note">You are checking out as a guest.</p>

          <form>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />

            <label>Phone</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />

            <label>Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />

            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />

            <div className="save-info">
              <input type="checkbox" />
              <label>Save this for next time.</label>
            </div>
          </form>
        </section>

        <div className="check">
          <div className="payment">
            <h4>Payment Options</h4>
            <label><input type="radio" name="payment" value="card" checked={payment === "card"} onChange={(e) => setPayment(e.target.value)} /> Credit / Debit Card</label>
            <label><input type="radio" name="payment" value="easypaisa" checked={payment === "easypaisa"} onChange={(e) => setPayment(e.target.value)} /> Easypaisa</label>
            <label><input type="radio" name="payment" value="cod" checked={payment === "cod"} onChange={(e) => setPayment(e.target.value)} /> Cash on Delivery</label>
          </div>

          <div className="summary">
            <h4>Order Summary</h4>
            {cart.map((item) => (
              <div className="summary-item" key={item.id}>
                <div className="summary-left">
                  <img src={`/images/${item.image}`} alt={item.title} className="summary-img" />
                  <div>
                    <p><strong>{item.title}</strong></p>
                    <p>Qty: {item.qty}</p>
                  </div>
                </div>
                <p>Rs {item.price * item.qty}</p>
              </div>
            ))}
            <hr />
            <p>Subtotal <span>Rs {subtotal}</span></p>
            <p>Shipping Fee <span>Rs {shipping}</span></p>
            <hr />
            <p className="total">Total <span>Rs {total}</span></p>
            <button className="place-order" onClick={placeOrder}>Place Order</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;