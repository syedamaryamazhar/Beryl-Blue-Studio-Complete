import React , {useState} from "react";
import Header from"/src/components/header" ;
import Footer from"/src/components/footer" ;
import "./Contact.css";

const Contact = () => {
    const [formData ,setFormData] = useState({
        name:"",
        email:"",
        subject:"",
        message:"",

    });

      const handleChange = (e) => {
        setFormData({
          ...formData,
           [e.target.name]: e.target.value,
        });
  };


    const handleSubmit = (e) => {
        e.preventDefault();

        if(
            formData.name ==="" || formData.email ==="" || formData.subject === "" || formData.message ===""
        )
        {
            alert("Please fill all the fields.");
            return;
        }

        alert("Message sent successfully!");

        setFormData({
            name:"" ,
            email:"",
            subject:"",
            message:"",
        } );
    };

    return(
        <div>
           

            <main className="main">
                <div className="intro">
                    <h2>Let's create Something Beautiful Together.</h2>
                    <p>
                        Have a question, an idea for a custom craft, or just want to say hello? I'd love to here from you.
                    </p>
                </div>

                <section className="contact-form">
                    <p className="form-intro">Please fill out the form to reach me.</p>

                    <form onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        />

                        <label>Email</label>
                        <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        />

                        <label>Subject</label>
                        <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        />

                        <label>Subject</label>
                        <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        >

                            <option value="">Select an option</option>
                            <option value="order">Order query</option>
                            <option value="cutomization">Customization</option>
                            <option value="collaboration">Collaboration</option>
                            <option value="other">Other</option>
                            </select>

                            <label>Message</label>
                            <textarea
                            rows="5"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            ></textarea>

                            <button className="btn" type="submit">Send message</button>
                              </form>
                              </section>

                              <section className="contact-details">
                                <h3>Contact Details</h3>
                                <p>
                                    <img src="/images/mail icon.svg" width="18"/>
                                     berylbluestudio@gmail.com
                                </p>
                                <p>
                                     <img src="/images/phone icon.svg" width="18"/>
                                     +92 570 9876745
                                </p>
                                 <p>
                                     <img src="/images/instagram icon.svg" width="18"/>
                                     @berylbluestudio
                                </p>

                              </section>
            </main>
           
        </div>
    );
};

export default Contact;
