import React, {useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import './Productdetail.css'
import ProductCard from "/src/components/product-card";
import { useNavigate } from 'react-router-dom';
import { useCart } from '/src/Context/CartContext';


const ProductDetail = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [product, setProduct] = useState(null);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState("");
    const [added, setAdded] = useState(false);
    const [openSection, setOpenSection] = useState('details');
    const [loading, setLoading] = useState(true);
    // const [morelikethis, setMorelikethis] = useState(true);
     const { addToCart } = useCart();

   


    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${id}`)
            .then(response => {
                if(!response.ok) throw new Error('Product not found');
                return(response.json());
            })
            .then(data => {
                setProduct(data);
                setMainImage(data.image);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                setLoading(false);
            });

        setAdded(false);
        setQuantity(1);
        window.scrollTo(0,0);
    }, [id]);
    
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


    const toggleSection = (section) => {
        setOpenSection(openSection === section ? '' : section);
    };

    const handleAddToCart = () => {
       addToCart(product, quantity);
        setAdded(true);
       setTimeout(() => setAdded(false), 2000);
     };

    
  

    if (loading) {
        return <div className="container"><p style={{padding: '100px', textAlign: 'center'}}>Loading product details...</p></div>;
    }

    if (!product) {
        return <div className="container"><p style={{padding: '100px', textAlign: 'center'}}>Product not found.</p></div>;
    }

    return(
        <div className='productsdetail'>
          
            <main className='container'>
                <section className='product-detail-grid'>
                    {/* Images section */}
                    <div className='detail-left'>
                        <div className='product-images'>
                            <div className='small-image-gallery'>
                                <img src={`/images/${product.smimage || product.image}`}  className='small-image1'
                                onClick={() => setMainImage(product.smimage || product.image)}/>

                                <img src={`/images/${product.smimage2 || product.image}`}  className='small-image2'
                                onClick={() => setMainImage(product.smimage2 || product.image)}/>
                            </div>
                            <img src={`/images/${mainImage}`} className='main-image'/>
                        </div>
                    </div>
                    {/* Name price  */}
                    <div className='detail-right'>
                        <h2 className='product-name'>{product.title}</h2>
                        <p className='product-category'>{product.category}</p>

                        <div className='price-row'>
                            <p className='product-price'>Rs {product.price}</p>
                            <span className='sale-tag'>ON SALE</span>
                        </div>
                        {/* Quantity  */}
                        <div className='qty-row'>
                            <p>Quantity</p>
                            <div className='qty-selector'>
                                <button onClick={() => setQuantity(Math.max(1,quantity-1))}>-</button>
                                <input type='number' value={quantity} readOnly/>
                                <button onClick={() => setQuantity(Math.min(10, quantity+1))}>+</button>
                            </div>
                        </div>

                            {/* Buttons  */}
                        <button className={`btn-add-to-cart ${added ? 'success': ''}`}
                        onClick={handleAddToCart}
                        disabled = {added}>
                            {added ? 'Added to Cart!' : 'Add to Cart'}
                        </button>

                        <button className='btn-customize-product' onClick={() =>{ navigate('/customizepg1')}}> Customize this Product</button>

                        {/* Exand Details  */}
                        <div className='expandable-section'>
                            <div>
                                <div className='expand-title' onClick={() => toggleSection('details')}>
                                    Details 
                                    <span className={`expand-icon ${openSection === 'delivery' ? 'open' : ''}`}>▼</span>
                                </div>
                                <div className={`expandable-content ${openSection === 'details'?'open':''}`}>
                                    <p><b>Product Category: </b>{product.category}</p>
                                    <p><b>Assembly: </b>HANDMADE</p>
                                    <p><b>Type: </b>{product.type}</p>
                                    <p><b>Material: </b>{product.material}</p>
                                    <p><b>Size: </b>{product.size}</p>
                                </div>
                            </div>

                            <div className='expandable-section'>
                                <div className='expand-title' onClick={() => toggleSection('delivery')}>
                                    Delivery 
                                    <span className={`expand-icon ${openSection === 'delivery' ? 'open' : ''}`}>▼</span>
                                </div>
                                <div className={`expandable-content ${openSection === 'delivery'?'open':''}`}>
                                    <p>Expect to get by 19-25 November</p>
                                    <p>Delivery Charge: Rs 200</p>
                                    <p>Dispatched from: Rawalpindi Pakistan</p>
                                </div>
                            </div>


                            <div className='expandable-section'>
                                <div className='expand-title' onClick={() => toggleSection('policy')}>
                                    Return policy 
                                    <span className={`expand-icon ${openSection === 'delivery' ? 'open' : ''}`}>▼</span>
                                </div>
                                <div className={`expandable-content ${openSection === 'policy'?'open':''}`}>
                                    <p>Expect to get by 19-25 November</p>
                                    <p>Delivery Charge: Rs 200</p>
                                    <p>Dispatched from: Rawalpindi Pakistan</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="container">
                    <h2 className="section-title">More Like This</h2>
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
            </main>

        </div>
    );

};

export default ProductDetail;