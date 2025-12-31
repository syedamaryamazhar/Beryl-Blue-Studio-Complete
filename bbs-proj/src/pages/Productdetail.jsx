import React, {useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import './Productdetail.css'
import ProductCard from "/src/components/product-card";
import Header from "/src/components/header";
import Footer from "/src/components/footer";

const ProductDetail = () => {
    const {id} = useParams();
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState("");
    const [added, setAdded] = useState(false);
    const [openSection, setOpenSection] = useState('details');

    const productsData ={
        1: { title: "Torquise Eid Card", price: "300", image: "p1.jpeg",smimage: "eidtorquise2.jpeg",smimage2: "p1.jpeg", category: "Greeting Card", type: "Physical", size: "6 x 12", material: "Hard chart" },
        2: { title: "Mushroom Tags Pack of 7", price: "210", image: "p2.jpeg",smimage: "tag1.jpeg",smimage2: "tag2.jpeg", category: "Tags", type: "Physical", size: "3 x 4", material: "Hard chart" },
        3: { title: "Chemistry Theme Birthday Card", price: "300", image: "p3.jpeg",smimage: "p3.jpeg",smimage2: "p3.jpeg", category: "Greeting Card", type: "Physical", size: "6 x 12", material: "Hard chart" },
        4: { title: "Purple Eid Card", price: "300", image: "p4.jpeg",smimage: "p4.jpeg",smimage2: "p4.jpeg", category: "Greeting Card", type: "Physical", size: "6 x 12", material: "Hard chart" },
        5: { title: "Mini Yellow Spring Album", price: "600", image: "p5.jpeg",smimage: "al1.jpeg",smimage2: "al2.jpeg", category: "Album", type: "Physical", size: "4 x 6", material: "Hard chart" },
        6: { title: "Flowers bookmarks Set of 3", price: "250", image: "bookmark.jpeg",smimage: "bookmark1.jpeg",smimage2: "bookmark2.jpeg", category: "Bookmark", type: "Physical", size: "2 x 6", material: "Hard chart" },
        7: { title: "Cherry Blossoms Card", price: "300", image: "p7.jpeg",smimage: "cherry1.jpeg",smimage2: "cherry2.jpeg", category: "Greeting Card", type: "Physical", size: "6 x 12", material: "Hard chart" },
        8: { title: "Lavender Greeting Card", price: "300", image: "p8.jpeg",smimage: "p8.jpeg",smimage2: "p8.jpeg", category: "Greeting Card", type: "Physical", size: "6 x 12", material: "Hard chart" }
    };

    const product = productsData[id] || productsData[1];

    useEffect(() => {
        setMainImage(product.image);
        setAdded(false);
        setQuantity(1);
        window.scrollTo(0,0);
    }, [id, product.image]);

    const handleAddToCart = () => {
        const cartItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            qty: quantity
        };

        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const itemIndex = existingCart.findIndex(item => item.id === product.id);

        if (itemIndex > -1) {
            existingCart[itemIndex].qty += quantity;
        } else {
            existingCart.push(cartItem);
        }

        localStorage.setItem("cart", JSON.stringify(existingCart));
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    }

    return(
        <main className='container'>
            <section className='product-detail-grid'>
                <div className='detail-left'>
                    <div className='product-images'>
                        <div className='small-image-gallery'>
                            <img src={`/images/${product.smimage}`}  className={`${mainImage === product.smimage ? 'active' : ''}`}
                            onClick={() => setMainImage(product.smimage)}/>

                            <img src={`/images/${product.smimage2}`}  className={`${mainImage === product.smimage2 ? 'active' : ''}`}
                            onClick={() => setMainImage(product.smimage2)}/>
                        </div>
                        <img src={`/images/${mainImage}`} className='main-image'/>
                    </div>
                </div>

                <div className='detail-right'>
                    <h2 className='product-title'>{product.title}</h2>
                    <p className='product-category'>{product.category}</p>

                    <div className='price-row'>
                        <p className='produt-price'>Rs {product.price}</p>
                        <span className='sale-tag'>ON SALE</span>
                    </div>

                    <div className='qty-row'>
                        <p>Quantity</p>
                        <div className='qty-selector'>
                            <button onClick={() => setQuantity(Math.max(1,quantity-1))}>-</button>
                            <input type='number' value={quantity} readOnly/>
                            <button onClick={() => setQuantity(Math.min(10, quantity+1))}>+</button>
                        </div>
                    </div>

                    <button className={`btn-add-to-cart${added ? 'success': ''}`}
                    onClick={handleAddToCart}
                    disabled = {added}>
                        {added ? 'Added to Cart!' : 'Add to Cart'}
                    </button>

                    <Link to="/" className='btn-customize-product'> Customize this Product</Link>
                
                    <div className='expandable-section'>
                        <div>
                            <div className='expand-title' onClick={() => setOpenSection(openSection === 'details' ? '': 'details')}>
                                Item Details
                                <span className={`arrow${openSection === 'details'? 'up':''}`}><img src='./images/arrow.svg'/></span>
                            </div>

                            {openSection === 'details' && (
                                <div className='expand-content'>
                                    <p><b>Product Category: </b>{product.category}</p>
                                    <p><b>Assembly: </b>HANDMADE</p>
                                    <p><b>Type: </b>{product.type}</p>
                                    <p><b>Material: </b>{product.material}</p>
                                    <p><b>Size: </b>{product.size}</p>
                                </div>

                            )}
                        </div>

                        <div>
                            <div className='expand-title' onClick={() => setOpenSection(openSection === 'delivery' ? '': 'delivery')}>
                                Item Details
                                <span className={`arrow${openSection === 'delivery'? 'up':''}`}><img src='./images/arrow.svg'/></span>
                            </div>

                            {openSection === 'delivery' && (
                                <div className='expand-content'>
                                    <p>Expect to get by 19-25 November</p>
                                    <p>Delivery Charge: Rs 200</p>
                                    <p>Dispatched from: Rawalpindi Pakistan</p>
                                </div>

                            )}
                        </div>


                        <div>
                            <div className='expand-title' onClick={() => setOpenSection(openSection === 'policy' ? '': 'policy')}>
                                Item Details
                                <span className={`arrow${openSection === 'policy'? 'up':''}`}><img src='./images/arrow.svg'/></span>
                            </div>

                            {openSection === 'policy' && (
                                <div className='expand-content'>
                                    <p><b>Order Policy:</b> Customers have 24 hours to cancel the order made.</p>
                                    <p><b>Refunds Policy:</b> Non refundable</p>
                                </div>
                            )}
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
    )

}