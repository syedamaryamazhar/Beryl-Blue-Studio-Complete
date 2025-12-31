import React from "react";
import {Link, BrowserRouter, Routes, Route}  from 'react-router-dom';
import Header from "/src/components/header";
import Footer from "/src/components/footer";
import './About.css'

const About = () =>{
    return(
        <div className="about-page" >
            <Header />

            <main>
                <section className="intro">
                    <h2>About Beryl Blue Studio</h2>
                    <p>
                            Welcome to Beryl Blue Studio, a space where imagination takes shape
                            through paper, color, and creativity. What began as a small passion
                            for handmade crafts has blossomed into a cozy corner of artistry
                            filled with thoughtful details, textured designs, and endless love
                            for the craft of creating.
                    </p>
                </section>

                <section className="origin">
                    <div className="text">
                        <h3>Origin of Beryl Blue Studio</h3>
                        <p>
                               Welcome to Beryl Blue Studio, a space where imagination takes shape
                               through paper, color, and creativity. What began as a small passion
                               for handmade crafts has blossomed into a cozy corner of artistry
                               filled with thoughtful details, textured designs, and endless love
                               for the craft of creating.
                        </p>
                    </div>

                       <img src="/images/img1.jpg" alt="Origin" className="image" />
                       </section>

                       <section className="timeline">
                           <img src="/images/img1.jpg" alt="Origin" className="image" />

                           <div className="text">
                            <h3>Timeline of Our Creative Journey</h3>
                            <ul>
                                   <li><strong>2019:</strong>The first handmade card was crafted the spark that started it all.</li>
                                   <li><strong>2020:</strong>Began creating themed paper crafts for friends and local art enthusiasts.</li>
                                   <li><strong>2021:</strong> Officially launched Beryl Blue Studio as an independent creative space.</li>
                                   <li><strong>2022:</strong>Expanded into customized paper art and started offering made-to-order designs.</li>
                                   <li><strong>2023:</strong>Participated in local craft fairs and began building our online presence.</li>
                                   <li><strong>2024-Present:</strong>Designing unique collections and exploring new forms of paper artistry.</li>
                            </ul>
                           </div>
                       </section>

                       <section className="materials">
                        <h3>Materials I Used</h3>
                        <p>
                             We work with colored papers, charts, markers, color pencils,
                             decorative sheets, ribbons, and handmade embellishments. Wherever
                             possible, recyclable and eco-friendly materials are used to promote
                             sustainability.
                        </p>
                       </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;

