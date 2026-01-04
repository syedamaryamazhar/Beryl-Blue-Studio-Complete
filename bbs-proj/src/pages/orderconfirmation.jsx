import React from "react";
import ProressBar from "/src/components/progressbar";
import { useNavigate } from "react-router-dom";
import './orderconfirmation.css'

const OrderConfirm = () => {
    const navigate = useNavigate();
    return(
        <div className="order-confirm">

            <main className="container">
                <section className="customize-section">
                    <ProressBar currentStep={4} />

                    <div className="content">
                        <h1 className="section-title">Thank You for the Order!</h1>

                        <p className="p">Your order is on its way to be handcrafted.</p>

                        <button className="btn-cont-shop" onClick={() =>{ navigate('/')}}>Continue Shopping</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default OrderConfirm;
