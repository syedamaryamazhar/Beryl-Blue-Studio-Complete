import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Progress from "../components/Progress";
import { useCart } from "../context/CartContext";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, clearCart } = useCart();

  const { payment, customer } = location.state || {};

  useEffect(() => {
    if (!payment || !customer) {
      navigate("/checkout");
    }
  }, [payment, customer, navigate]);

  const [paymentDetails, setPaymentDetails] = useState({
    accountName: "",
    accountNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 200;
  const total = subtotal + shipping;

  const handleConfirmPayment = async () => {
    if (!paymentDetails.accountName || !paymentDetails.accountNumber) {
      alert("Please fill payment details");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: customer.name,
          phone: customer.phone,
          email: customer.email,
          address: customer.address, 
          payment: payment,
          subtotal,
          shipping,
          total,
          cart,
        }),
      });

      if (response.ok) {
      
        localStorage.removeItem("cart"); 
        
       
        navigate("/Thankyou"); 
        window.location.reload();
      } else {
        const err = await response.json();
        alert("Payment failed: " + err.message);
      }
    } catch (error) {
    
      console.error("Payment error:", error);
      alert("System Error: " + error.message);
    }
  };
  

  return (
    <div className="Payment">
      <main className="container">
        <Progress currentStep={3} />
        <div className="content-grid">
          <div className="payment-form">
            <h3 className="form-title">Payment Method: {payment?.toUpperCase()}</h3>
            <label>Account Holder Name</label>
            <input name="accountName" value={paymentDetails.accountName} onChange={handleChange} placeholder="Enter name" />
            <label>Account Number</label>
            <input name="accountNumber" value={paymentDetails.accountNumber} onChange={handleChange} placeholder="Enter account number" />
            <button className="btn-next-step" onClick={handleConfirmPayment}>Confirm Payment</button>
            <p className="email-confirmation-text">You will receive an email after payment.</p>
          </div>

          <div className="total-summary">
            <h4 className="summary-title">Order Summary</h4>
            {cart.map((item) => (
              <div key={item.id} className="summary-row">
                <p>{item.title} × {item.qty}</p>
                <p>Rs {item.price * item.qty}</p>
              </div>
            ))}
            <hr />
            <div className="summary-row"><p>Subtotal</p><p>Rs {subtotal}</p></div>
            <div className="summary-row"><p>Shipping</p><p>Rs {shipping}</p></div>
            <hr />
            <div className="total"><p>Total</p><p>Rs {total}</p></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;