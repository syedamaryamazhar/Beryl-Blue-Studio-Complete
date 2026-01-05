import React,{useState, useEffect} from "react";
import {useNavigate}  from 'react-router-dom';
import ProductCard from "/src/components/product-card";
import './Homepage.css'

const Home = () => {
    const navigate = useNavigate();
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {
                fetch('http://localhost:5000/api/products')
                    .then(response => {
                        if(!response.ok) {
                            throw new Error('Failed to fetch products');
                        }
                        return response.json();
                    })
                    .then(data => {
                        setFeaturedProducts(data);
                        setLoading(false);
                    })
                    .catch(error => {
                        console.error('Error fetching products:', error);
                        setLoading(false);
                    });
            }, []);
    
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