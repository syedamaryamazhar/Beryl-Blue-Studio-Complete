import React from "react";
import {  useNavigate } from "react-router-dom";
import "./Thankyou.css";
import Footer from "../components/footer";
import Header from "../components/header";

const Thankyou = () => {
    const navigate = useNavigate() ;

    const goToPage = () => {
        navigate("/");
    };

    return(
        <div>
            <Header />
            <main className="container">
                <section className="customize-sectionn">

        <div className="progress">
          <div className="step">
            <div className="circle"></div>
            <p>Cart</p>
          </div>
          <div className="line"></div>
          <div className="step">
            <div className="circle" ></div>
            <p>Checkout</p>
          </div>
          <div className="line"></div>
          <div className="step">
            <div className="circle active"></div>
            <p>Order Confirmation</p>
          </div>
        </div>

        <div className="content">
            <h1 className="section-title">Thank You for the Order!.</h1>
            <p>Your order is in its way to be handcrafted.</p>

            <button className="btn-cont-shop" onClick={goToPage}> Continue Shopping</button>
        </div>

                </section>
            </main>
            <Footer />
        </div>
    );

};

export default Thankyou;