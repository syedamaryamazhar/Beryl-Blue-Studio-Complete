import React, {useState} from 'react';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import './Productspage.css'
import ProductCard from "/src/components/product-card";
import Header from "/src/components/header";
import Footer from "/src/components/footer";

const ProductsPage = () => {
    //tracking active category bar
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        {id: 'all', label: 'All'},
        {id: 'cards', label: 'Cards'},
        {id: 'bookmarks', label: 'Bookmarks'},
        {id: 'albums', label: 'Albums'},
        {id: 'tags', label: 'Tags'},
        {id: 'packaing', label: 'Packaging'},
        {id: 'bd-package', label: 'Birthday Packages'},
        {id: 'props', label: 'Props'},
    ];

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

    const filteredProducts = activeCategory === 'all'? featuredProducts:featuredProducts.filter(p => p.category === activeCategory);

    return(
        <div className='productspage'>
            <Header />
            <section className='container'>
                <h2 className='section-title'>Shop by Category</h2>
                <div className='box-groups'>
                    <div className='box-row'>
                        {categories.map((opt => (
                            <button key={opt.id} className={`box-btn ${activeCategory === opt.id ? 'active':''}`}>{opt.label}</button>

                        )))}
                    </div>
                </div>
            </section>

            <section className='container'>
                <h2 className='section-title'>Products</h2>
                <div className='products-grid'>
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

            <section className='pagination'>
                <Link to="/" class="page-number active">1</Link>
                <Link to="/" class="page-number">2</Link>
                <Link to="/" class="page-number">3</Link>
                <Link to="/" class="page-number">4</Link>
            </section>

            <Footer />
        </div>
    );
};

export default ProductsPage;