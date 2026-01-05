import React, {useState} from "react";
import ProressBar from "/src/components/progressbar";
import { useNavigate } from "react-router-dom";
import './customizepg2.css'

const CustomizePg2 = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        occasion:'',
        colorTheme: '',
        size: '',
        msgFront: '',
        msgInside: '',
        envelope: 'yes'
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]:value}));
    };

    return(
        <div className="customizepg2">
            
            <main className="container">
                <section className="customize-section">
                    <h2 className="section-title">Customize your Paper Art</h2>
                    <p className="customize-subtitle">Choose your item, select your preferences, and we'll craft it just for you.</p>

                    <ProressBar currentStep={1}/>

                    <div className="content-grid">
                        <div className="form-box">
                            <form>
                                <label htmlFor="occasion">Occasion</label>
                                <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>Select an Occasion
                                    <option value={""}>Select an Occasion</option>
                                    <option value={"birthday"}>Birthday</option>
                                    <option value={"anniversary"}>Anniversary</option>
                                    <option value={"wedding"}>Wedding</option>
                                    <option value={"getwellsoon"}>Get Well Soon</option>
                                    <option value={"friendship"}>Friendship</option>
                                    <option value={"teachers"}>Teacher's Day</option>
                                    <option value={"other"}>Other</option>
                                </select>

                                <label htmlFor="colorTheme">Color Theme</label>
                                <input type="text" id="colorTheme" name="colorTheme" placeholder="E.g Pastel colors" value={formData.colorTheme} onChange={handleChange}/>
                                
                                <label htmlFor="size">Size</label>
                                <select id="size" name="size" value={formData.size} onChange={handleChange}>
                                    <option value="">Select a size</option>
                                    <option value="a6p">A6 Portrait</option>
                                    <option value="a7p">A7 Portrait</option>
                                    <option value="a2p">A2 Portrait</option>
                                    <option value="a6l">A6 Landscape</option>
                                    <option value="a6l">A6 Landscape</option>
                                    <option value="a6l">A6 Landscape</option>
                                </select>

                                <label htmlFor="msgFront">Message on front</label>
                                <input type="text" id="msgFront" name="msgFront" placeholder="E.g Happy Birthday Sarah!" value={formData.msgFront} onChange={handleChange}/>

                                <label htmlFor="msgInside">Message inside (optional)</label>
                                <input type="text" id="msgInside" name="msgInside" placeholder="E.g have a good day!" value={formData.msgInside} onChange={handleChange}/>

                                <label>Include Envelope</label>
                                <div className="radio-group">
                                    <label>
                                        <input 
                                        type="radio" 
                                        name="envelope" 
                                        value="yes" 
                                        checked={formData.envelope === 'yes'} 
                                        onChange={handleChange} 
                                        /> Yes
                                    </label>
                                    <label>
                                        <input 
                                        type="radio" 
                                        name="envelope" 
                                        value="no" 
                                        checked={formData.envelope === 'no'} 
                                        onChange={handleChange} 
                                        /> No
                                    </label>
                                </div>
                            </form>
                        </div>

                        <div className="total-summary">
                            <h3 className="summary-title">Estimated Total</h3>

                            <p>Subtotal <span>Rs 3300</span></p>
                            <p>Discount <span>Rs -100</span></p>
                            <p>Shipping Fee <span>Rs 300</span></p>
                            <hr/>
                            <p className="total">Total Amount<span>Rs 3500</span></p>

                            <button className="btn-next-step" onClick={() =>{ navigate('/customizepg3')}}>Proceed To Next Step</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CustomizePg2;