import React, {useState} from "react";
import ProressBar from "/src/components/progressbar";
import { useNavigate } from "react-router-dom";
import './dopayment.css'

const DoPayment = () => {
    const navigate = useNavigate();
    const [paymentDetails, setPaymentDetails] = useState({
        accountName: '',
        accountNumber: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPaymentDetails(prev => ({...prev, [name]:value}));
    };

    

    return(
        <div className="dopaymentpg">
            <main className="container">
                <section className="customize-section">
                    <ProressBar currentStep={3} />

                    <div className="content-grid">
                        <div className="payment-form">
                            <h3 className="form-title">Payment Details</h3>

                            <form>
                                <label htmlFor="accountName">Account Holder's Name</label>
                                <input type="text" id="accountName" name="accountName" placeholder="Account Holder's Name" value={paymentDetails.accountName} onChange={handleChange}/>

                                <label htmlFor="accountNumber">Account Number</label>
                                <input type="tel" id="accountNumber" name="accountNumber" placeholder="XXXX XXXX XXXX XXXX" value={paymentDetails.accountNumber} onChange={handleChange}/>

                                <button type="button" className="btn-next-step" onClick={() =>{ navigate('/orderconfirmation')}}>Confirm Payment</button>
                                <p className="email-confirmation-text">You will receive an email after confirming payment</p>
                            </form>
                        </div>
                        <div className="total-summary">
                            <h3 className="summary-title">Order summary</h3>
                            
                            <p className="p">Subtotal <span>Rs 3300</span></p>
                            <p className="p">Discount <span>-Rs 100</span></p>
                            <p className="p">Shipping Fee<span>Rs 300</span></p>
                            <hr />
                            <p className="total">Total Amount<span>Rs 3500</span></p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
export default DoPayment;

