import React, {useState, useEffect} from 'react';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import './Productspage.css'
import ProductCard from "/src/components/product-card";


const ProductsPage = () => {
    //tracking active category bar
    const [activeCategory, setActiveCategory] = useState('all');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => {
                if(!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, []);

    const filteredProducts = activeCategory === 'all'? products:products.filter(p => p.category === activeCategory);
    
    if(loading){
        return(
            <div></div>
        );
    }

    return(
        <div className='productspage'>
        
            <section className='container'>
                <h2 className='section-title'>Shop by Category</h2>
                <div className='box-groups'>
                    <div className='box-row'>
                        {categories.slice(0,5).map((opt => (
                            <button key={opt.id} className={`box-btn ${activeCategory === opt.id ? 'active':''}`} 
                            onClick={() => setActiveCategory(opt.id)}>{opt.label}</button>

                        )))}
                    </div>
                    <div className='box-row'>
                        {categories.slice(5,7).map((opt => (
                            <button key={opt.id} className={`box-btn ${activeCategory === opt.id ? 'active':''}`} 
                            onClick={() => setActiveCategory(opt.id)}>{opt.label}</button>

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