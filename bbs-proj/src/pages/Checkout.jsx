import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "/src/components/header";
import Footer from "/src/components/footer";
import "./Checkout.css";

const Checkout = () => {
    const navigate = useNavigate();

    const [cart , setCart] = useState ([]) ;
    const [formData, setFormData ] = useState ({
        name:"",
        phone:"",
        email:"",
        adreess:"",
    });

    const [payment , setPayment] =useState ("");

    useEffect (() => {
        const storedCart =JSON.parse(localStorage .getItem("cart")) || [];
    setCart(storedCart);
    }, []
);

const subtotal =cart.reduce(
    (sum , item) => sum + item.price * item.qty ,
    0
);

const shipping =200;
const total =subtotal + shipping;

const handleChange =(e) => {
    setFormData({...formData , [e.target.name]: e.target.value });
};

const placeOrder = () => {
    const {name , phone , email , adreess} =formData;

    if(!name || !phone || !email || !address || !payment){
        alert("Please fill all fields and select a payment method.");
        return;
    }

    navigate("/thankyou");
};

return(
    <div>
        <Header/>
        <main>
             <div className="progress">
          <div className="step">
            <div className="circle"></div>
            <p>Cart</p>
          </div>
          <div className="line"></div>
          <div className="step">
            <div className="circle active"></div>
            <p>Checkout</p>
          </div>
          <div className="line"></div>
          <div className="step">
            <div className="circle"></div>
            <p>Order Confirmation</p>
          </div>
        </div>

        <h2>Almost there! Just a few details to complete your order. </h2>

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
                name="address"
                value={formData.adreess}
                onChange={handleChange}
                />

                <div className="save-info">
                    <input type="checkbox"/>
                    <label>Save this for next time.</label>
                </div>
            </form>
        </section>

        <div className="checkout">
            <div className="payment">
                <h4>Payment Options</h4>
                <label>
                    <input 
                    type="radio"
                    name="payment"
                    onChange={ () => setPayment("card")}
                    />
                    Credit / Debit Card
                </label>

                <label>
                    <input
                    type="radio"
                    name="payment"
                    onChange={ () => setPayment("easypaise")}
                    />
                    Easypaisa
                </label>

                 <label>
                    <input
                    type="radio"
                    name="payment"
                    onChange={ () => setPayment("cod")}
                    />
                    Cash on Delivery
                </label>
            </div>

            <div className="summary">
                <h4>Order Summary</h4>
                <p>
                    subtotal <span>Rs {subtotal}</span>
                </p>

                <p>
                    shipping fee <span>Rs {shipping}</span>
                </p>
                <hr />
                <p className="total">
                    Toatal <span>Rs {total}</span>
                </p>

                <p className="delivery-date">
                    Estimate Delivery Date <span>3-5 Jan</span>
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

        <Footer />
    </div>
);
};

export default Checkout;