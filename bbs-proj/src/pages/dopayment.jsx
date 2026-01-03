import React, {useState, useTransition} from "react";
import ProressBar from "/src/components/progressbar";
import Header from "/src/components/header";
import Footer from "/src/components/footer";
import './dopayment.css'

const DoPayment = () => {
    const [paymentDetails, stePaymentDetails] = useState({
        accountName: '',
        accountNumber: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDetails(prev => ({...prev, [name]:value}));
    };

    const handleConfirmPayment = () => {
        console.log("Navigate to order onformed page");
    };

    return(
        <div className="dopaymentpg">
            <Header />
            <main className="container">
                <section className="customize-section">
                    <ProgressBar currentStep={3} />

                    <div className="content-grid">
                        <div className="payment-form">
                            <h3 className="form-title">Payment Details</h3>

                            <form>
                                <label htmlFor="accountName">Account Holder's Name</label>
                                <input type="text" id="accountName" name="accountName" placeholder="Account Holder's Name" value={paymentDetails.accountName} onChange={handleChange}/>

                                <label htmlFor="accountNumber">Account Number</label>
                                <input type="tel" id="accountNumber" name="accountNumber" placeholder="XXXX XXXX XXXX XXXX" value={paymentDetails.accountNumber} onChange={handleChange}/>

                                <button className="btn-next-step" onClick={handleChange}>Confirm Payment</button>
                                <p className="email-confirmation-text">You will receive an email after confirming payment</p>

                                <div className="total-summary">
                                    <h3 className="summary-title">Order summary</h3>
                                    
                                    <p className="p">Subtotal <span>Rs 3300</span></p>
                                    <p className="p">Discount <span>-Rs 100</span></p>
                                    <p className="p">Shipping Fee<span>Rs 300</span></p>
                                    <hr />
                                    <p className="total">Total Amount<span>Rs 3500</span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};
export default DoPayment;

