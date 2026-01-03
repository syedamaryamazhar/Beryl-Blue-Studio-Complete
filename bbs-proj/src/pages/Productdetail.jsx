import React, {useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import './ProductDetail.css'
import ProductCard from "/src/components/product-card";
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const navigate = useNavigate();

    const {id} = useParams();
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState("");
    const [added, setAdded] = useState(false);
    const [openSection, setOpenSection] = useState('details');

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

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? '' : section);
    };
    
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
        <div className='productsdetail'>
          
            <main className='container'>
                <section className='product-detail-grid'>
                    {/* Images section */}
                    <div className='detail-left'>
                        <div className='product-images'>
                            <div className='small-image-gallery'>
                                <img src={`/images/${product.smimage}`}  className='small-image1'
                                onClick={() => setMainImage(product.smimage)}/>

                                <img src={`/images/${product.smimage2}`}  className='small-image2'
                                onClick={() => setMainImage(product.smimage2)}/>
                            </div>
                            <img src={`/images/${mainImage}`} className='main-image'/>
                        </div>
                    </div>
                    {/* Name price  */}
                    <div className='detail-right'>
                        <h2 className='product-name'>{product.title}</h2>
                        <p className='product-category'>{product.category}</p>

                        <div className='price-row'>
                            <p className='produt-price'>Rs {product.price}</p>
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
                        <button className={`btn-add-to-cart${added ? 'success': ''}`}
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
                                    <img src='./images/arrow.svg' className={`expand-icon ${openSection === 'details'?'open':''}`}
                                    width="16" height="16"/>
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
                                    <img src='./images/arrow.svg' className={`expand-icon ${openSection === 'delivery'?'open':''}`}
                                    width="16" height="16"/>
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
                                    <img src='./images/arrow.svg' className={`expand-icon ${openSection === 'policy'?'open':''}`}
                                    width="16" height="16"/>
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