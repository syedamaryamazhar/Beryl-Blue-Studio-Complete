import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "/src/components/header";
import Footer from "/src/components/footer";
import "./Cart.css";

const Cart = () =>{
    const [Cart , SetCart] =useState([]);
    const navigate =useNavigate();

    useEffect(() => {
        const storedCart =JSON.parse(localStorage.getItem("cart")) || [];
        SetCart(storedCart);
    }, []);

    useEffect ( () => {
        localStorage.setItem("cart",JSON.stringify(cart));
        },[cart]
    );

    const increaseQty =(id) =>{
        const updatedCart = cart.map( (item) =>
            item.id == id ? {...item, qty:item.qty +1 } : item
    );
    SetCart(updatedCart);
    };

    const decreaseQty =(id) => {
        const updatedCart =cart
        .map( (item) => {
            if (item.id === id) {
                if(item.qty ===1){
                    if(window.confirm("Remove this item from cart?")){
                        return null;
                    }
                }
                else{
                    return{...item, qty:item.qty -1};
                }
            }
            return item;
        })

        .filter(Boolean);

        SetCart(updatedCart);
        };

        const subtotal =cart .reduce(
            (sum,item) => sum + item.price * item.qty,
            0
        ); 

        const shipping =200;
        const total =subtotal + shipping ;

        return(
            <div>
                <Header />
                <main className="cart-section">

                    <div className="Progress">
                        <div className="step">
                            <div className="circle active"></div>
                            <p>Cart</p>
                        </div>

                        <div className="line"></div>
                        <div className="step">
                            <div className="circle "></div>
                            <p>Checkout</p>
                        </div>

                        <div className="line"></div>
                        <div className="step">
                            <div className="circle "></div>
                            <p>Order Confirmation</p>
                        </div>
                        </div>

                        <h2>Your Creative Cart</h2>

                        <p className="sub-text">
                             Your handmade crafts are ready to be made and delivered.
                      </p>

                      <div className="cart-container">
                        <div className="left-side">
                            {cart.lengt ===0 ? (
                                <p>Your cart is empty.</p>
                            ) : (
                                cart.map((item) => (
                                    <div className="cart-itm" key={item.id}>
                                        <div className="item-info">
                                            <div className="item-img">
                                                <img src={item.image} className="image" />
                                            </div>
                                            <div className="item-details">
                                                 <p><strong>{item.title}</strong></p>
                                                 <p>Quantity: {item.qty}</p>
                                                 <p><strong>Rs {item.price * item.qty}</strong></p>
                                                  </div>
                                                  </div>

                                                  <div className="box">
                                                    <button onClick={ () => decreaseQty(item.id) }>-</button>
                                                    <input type="text" value={item.qty} />
                                                    <button onClick={ () => increaseQty=(item.id) }> +</button>
                                                    </div>
                                                    </div>
                                                     ))
                                                     )}
                                                      </div>

                                                      <div className="right" >
                                                        <div className="note">
                                                            <input type="text" placeholder="Enter your note." />
                                                            <button>Add</button>
                                                            </div>

                                                            <div className="order-detail">
                                                                <p>
                                                                    Subtotal <span>Rs {subtotal}</span>
                                                                </p>
                                                                <p>
                                                                    Shipping Fee <span>Rs {shipping}</span>
                                                                </p>
                                                                <p className="total">
                                                                    Total <span> Rs {total}</span>
                                                                </p>
                                                                </div>

                                                                <button className="checkout"
                                                                    onClick= {() => navigate ("/checkout")} >
                                                                        Checkout
                                                                </button>
                                                                
                                                                </div>
                                                                </div>
                                                                </main>

                                                                <Footer />

       </div>

   );
}

export default Cart;


                                                                

                                                      

                                                     

                       
           


