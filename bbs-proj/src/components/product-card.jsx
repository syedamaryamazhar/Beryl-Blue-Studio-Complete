import React from 'react';
import { Link } from 'react-router-dom';
import './product-card.css'

const ProductCard = ({ id, title, price, image }) => {
    return(
        <div className='ProductCard'>
            <Link to={`/product/${id}`} className='product-box'>
                <img src={`${image}`} className='product-image'/>

                <div className='product-details'>
                    <p className='product-title'>{title}</p>
                    <img src="/images/Bag icon.svg" className='icon-bag'/>
                </div>
                <p className='price'>Rs {price}</p>
            </Link>

        </div>
    );
};

export default ProductCard;