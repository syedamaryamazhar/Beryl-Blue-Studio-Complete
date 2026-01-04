import React from "react";
import {  useNavigate } from "react-router-dom";
import "./Thankyou.css";
import Footer from "../components/footer";
import Header from "../components/header";
import Progress from "../components/Progress";

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

                  <Progress currentStep={3} />

        

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