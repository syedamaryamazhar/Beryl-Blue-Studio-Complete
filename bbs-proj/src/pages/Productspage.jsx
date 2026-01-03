import React, {useState} from 'react';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import './Productspage.css'
import ProductCard from "/src/components/product-card";


const ProductsPage = () => {
    //tracking active category bar
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        {id: 'all', label: 'All'},
        {id: 'cards', label: 'Cards'},
        {id: 'bookmarks', label: 'Bookmarks'},
        {id: 'albums', label: 'Albums'},
        {id: 'tags', label: 'Tags'},
        {id: 'packaging', label: 'Packaging'},
        {id: 'bd-package', label: 'Birthday Packages'},
        {id: 'props', label: 'Props'},
    ];

    const featuredProducts = [
        { id: 1, title:"Torquise Eid Card", price: 300, image: "/images/p1.jpeg", category: "cards"},
        { id: 2, title: "Mushroom Tags Pack of 7", price: 210, image: "/images/p2.jpeg", category: "tags"},
        { id: 3, title: "Chemistry Theme Birthday Card", price: 300, image: "/images/p3.jpeg", category: "cards"},
        { id: 4, title: "Purple Eid Card", price: 300, image: "/images/p4.jpeg", category: "cards" },
        { id: 5, title: "Mini Yellow Spring Album", price: 600, image: "/images/p5.jpeg", category: "albums" },
        { id: 6, title: "Flowery Bookmarks", price: 260, image: "/images/bookmark.jpeg", category: "bookmarks" },
        { id: 7, title: "Cherry Blossoms Card", price: 300, image: "/images/p7.jpeg", category: "cards" },
        { id: 8, title: "Lavender Greeting Card", price: 300, image: "/images/p8.jpeg", category: "cards" },
        { id: 9, title:"Torquise Eid Card", price: 300, image: "/images/p1.jpeg", category: "cards"},
        { id: 10, title: "Mushroom Tags Pack of 7", price: 210, image: "/images/p2.jpeg", category: "tags" },
        { id: 11, title: "Chemistry Theme Birthday Card", price: 300, image: "/images/p3.jpeg", category: "cards" },
        { id: 12, title: "Purple Eid Card", price: 300, image: "/images/p4.jpeg", category: "cards" },
        { id: 13, title: "Mini Yellow Spring Album", price: 600, image: "/images/p5.jpeg", category: "albums" },
        { id: 14, title: "Flowery Bookmarks", price: 260, image: "/images/bookmark.jpeg", category: "bookmarks" },
        { id: 15, title: "Cherry Blossoms Card", price: 300, image: "/images/p7.jpeg", category: "cards" },
        { id: 16, title: "Lavender Greeting Card", price: 300, image: "/images/p8.jpeg", category: "cards" },
    ];

    const filteredProducts = activeCategory === 'all'? featuredProducts:featuredProducts.filter(p => p.category === activeCategory);
    
    const handleCategoryClick = (categoryid) => {
        setActiveCategory(categoryid);
    };

    return(
        <div className='productspage'>
        
            <section className='container'>
                <h2 className='section-title'>Shop by Category</h2>
                <div className='box-groups'>
                    <div className='box-row'>
                        {categories.slice(0,5).map((opt => (
                            <button key={opt.id} className={`box-btn ${activeCategory === opt.id ? 'active':''}`} 
                            onClick={() => handleCategoryClick(opt.id)}>{opt.label}</button>

                        )))}
                    </div>
                    <div className='box-row'>
                        {categories.slice(5,7).map((opt => (
                            <button key={opt.id} className={`box-btn ${activeCategory === opt.id ? 'active':''}`} 
                            onClick={() => handleCategoryClick(opt.id)}>{opt.label}</button>

                        )))}
                    </div>
                </div>
            </section>

            <section className='container'>
                <h2 className='section-title'>Products</h2>
                <div className='products-grid'>
                    {filteredProducts.map((product) => (
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

        </div>
    );
};

export default ProductsPage;