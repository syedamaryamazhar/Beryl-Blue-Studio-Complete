import React, {useState} from "react";
import ProressBar from "/src/components/progressbar";
import Header from "/src/components/header";
import Footer from "/src/components/footer";
import './customizepg3.css'

const CustomizePg3 = () => {
    const [details, setDetails] = useState({
        name: '',
        phone: '',
        address: '',
        saveInfo: false,
        PaymentMethod: 'credit_card'
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setDetails(prev => ({...prev, [name]:type === 'checkbox' ? checked:value}));
    };

    const handlePaymentProceed = () => {
        console.log("Navigate to payment page");
    };

    return(
        <div className="customizepg2">
            <Header />
            
            <main className="container">
                <section className="customize-section">

                    <ProressBar currentStep={2}/>

                    <div className="content-grid">
                        <div>
                            <div className="delivery-form">
                                <h3 className="form-title">Delivery Information</h3>
                                <div className="form-box">
                                    <form>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" name="name" placeholder="Full name" value={details.name} onChange={handleChange}/>

                                        <label htmlFor="phone">Phone</label>
                                        <input type="tel" id="phone" name="phone" placeholder="+92 6XX-XXXXXXX" value={details.phone} onChange={handleChange}/>
                                        
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" placeholder="example@email.com" value={details.email} onChange={handleChange}/>
                                        
                                        <label htmlFor="address">Address</label>
                                        <input type="text" id="address" name="address" placeholder="Street, CIty, Postal code" value={details.address} onChange={handleChange}/>
                                        
                                        <label className="checkbox-label" htmlFor="save_info">
                                        <input type="checkbox" id="save_info" name="saveInfo" checked={details.saveInfo} onChange={handleChange}/>
                                        Save this for next time
                                        </label>
                                    </form>
                                </div>
                            </div>

                            <div className="payment-options-box">
                                <h3 className="payment-options-title">Payment Options</h3>

                                <div className="payment-option" onClick={() => setDetails(d => ({...d,paymentMethod: 'credit_card'}))}>
                                    <input type="radio" name="paymentMethod" id="credit_card" value="credit_card" checked={details.paymentMethod === 'credit_card'} onChange={handleChange}/>
                                    <label htmlFor="credit_card">Credit/Debit card</label>
                                </div>
                                <div className="payment-option" onClick={() => setDetails(d => ({...d, paymentMethod: 'easypaisa'}))}>
                                    <input 
                                        type="radio" 
                                        name="paymentMethod" 
                                        id="easypaisa" 
                                        value="easypaisa"
                                        checked={details.paymentMethod === 'easypaisa'}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="easypaisa">Easypaisa</label>
                                </div>
                                <p className="payment-info">Payment is done in advance for customized orders</p>
                            </div>
                        </div>

                        <div className="total-summary">
                            <h3 className="summary-title">Order summary</h3>
                            
                            <p className="p">Subtotal <span>Rs 3300</span></p>
                            <p className="p">Discount <span>-Rs 100</span></p>
                            <p className="p">Shipping Fee<span>Rs 300</span></p>
                            <hr />
                            <p className="total">Total Amount<span>Rs 3500</span></p>
                            <p className="estimated-date">Estimated delivery date 5-8 Jan</p>

                            <button className="btn-next-step" onClick={handlePaymentProceed}>Proceed to payment</button>
                            
                            <p className="email-confirmation-text">You will receive an email after placing order</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
                    
    );
};

export default CustomizePg3;