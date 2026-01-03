import React from "react";
import {useNavigate, BrowserRouter, Routes, Route}  from 'react-router-dom';
import ProductCard from "/src/components/product-card";
import './Homepage.css'

const Home = () => {
    const navigate = useNavigate();

    const featuredProducts = [
        { id: 1, title:"Torquise Eid Card", price: 300, image: "/images/p1.jpeg"},
        { id: 2, title: "Mushroom Tags Pack of 7", price: 210, image: "/images/p2.jpeg" },
        { id: 3, title: "Chemistry Theme Birthday Card", price: 300, image: "/images/p3.jpeg" },
        { id: 4, title: "Purple Eid Card", price: 300, image: "/images/p4.jpeg" },
        { id: 5, title: "Mini Yellow Spring Album", price: 600, image: "/images/p5.jpeg" },
        { id: 6, title: "Watercolor strips Birthday Card", price: 260, image: "/images/bookmark.jpeg" },
        { id: 7, title: "Cherry Blossoms Card", price: 300, image: "/images/p7.jpeg" },
        { id: 8, title: "Lavender Greeting Card", price: 300, image: "/images/p8.jpeg" },
    ];

    const collections = [
        {name: "Greeting Cards", image: "/images/cards.jpeg"},
        {name: "Bookmarks", image: "/images/bookmark.jpeg"},
        {name: "Albums", image: "/images/album2.jpeg"},
    ];

    return(
        <div className="homepage">
            <section className="hero-section">
                <div className="hero-image">
                    <img src="/images/herobanner.png" className="herobanner"/>
                    <div className="hero-content">
                        <button className="btn-customize" onClick={() =>{ navigate('/customizepg1')}}>Customize Now</button>
                    </div>
                </div>
            </section>

            <section className="container">
                <h2 className="section-title">Featured Collections</h2>
                <div className="collection-grid">
                    {collections.map((item, index) => (
                        <div key={index} className="collection-item">
                            <div className="collection-image-container">
                                <img src={`${item.image}`} className="collection-image"/>
                            </div>
                            <p className="collection-name">{item.name}</p>
                        </div>    
                    ))}
                </div>
            </section>

            <section className="container">
                <h2 className="section-title">Featured Products</h2>
                <div className="products-grid">
                    {featuredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;