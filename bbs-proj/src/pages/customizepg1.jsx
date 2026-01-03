import React, {useState} from "react";
import ProressBar from "/src/components/progressbar";
import Header from "/src/components/header";
import Footer from "/src/components/footer";
import './customizepg1.css'

const CustomizePg1 = () => {
    const [customType, setCustomType] = useState('greeting_card');

    const handleTypeChange = (event) => {
        setCustomType(event.target.value);
    };

    const handleProceed = () => {
        console.log("Proceeding with type:", customType);
        // In a real app, you would use navigation here:
        // window.location.href = "customizepg2.html";
    };
    const orderOptions = [
        {value: 'greeting card', label: 'Greeting Card'},
        {value: 'packaging', label: 'Packaging'},
        {value: 'bookmark', label: 'Bookmark'},
        {value: 'tags', label: 'Tags'},
        {value: 'albums', label: 'Albums'},
        {value: 'burthday_package', label: 'Birthday Package'},
        {value: 'props', label: 'Props'},
    ]
    return(
        <div className="customizepg1">
            <Header />
            
            <main className="container">
                <section className="customize-section">
                    <h2 className="section-title">Customize your Paper Art</h2>
                    <p className="customize-subtitle">Choose your item, select your preferences, and we'll craft it just for you.</p>

                    <ProressBar />

                    <div className="typesoforder">Types of Custom Order</div>

                    <div className="order-options-grid">
                        {orderOptions.map((option) => (
                            <label key={option.value}
                            className={`radio-option ${customType === option.value ? 'selected' : ''}`}>

                                <input type="radio" name="custom_type" value={option.value} checked={customType === option.value} onChange={handleTypeChange}/>
                                {option.label}
                            </label>
                        ))}
                    </div>

                    <button className="btn-proceed" onClick={handleProceed}>Proceed to Customize</button>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CustomizePg1;