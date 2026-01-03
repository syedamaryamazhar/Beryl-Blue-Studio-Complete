import React from "react";
import ProressBar from "/src/components/progressbar";
import Header from "/src/components/header";
import Footer from "/src/components/footer";
import './orderconfirmation.css'

const OrderConfirm = () => {
    const handleContinueShopping = () => {
        console.log("Navigate to homepage");
    };
    return(
        <div className="order-confirm">
            <Header />

            <main className="container">
                <section className="customize-section">
                    <ProressBar currentStep={4} />

                    <div class="content">
                        <h1 class="section-title">Thank You for the Order!</h1>

                        <p>Your order is in its way to be handcrafted.</p>

                        <button class="btn-cont-shop" onclick={handleContinueShopping}>Continue Shopping</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default OrderConfirm;
