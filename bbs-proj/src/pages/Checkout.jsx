import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "/src/components/header";
import Footer from "/src/components/footer";
import "./Checkout.css";

const Checkout = () => {
    const navigate = useNavigate();

    const [cart , setCart] = useState ([]) ;
    const [formData, setFormData ] = useState ({
        name:"",
        phone:"",
        email:"",
        adreess:"",
    });

    const [payment , setPayment] =useState ("");

    useEffect (() => {
        const storedCart =JSON.parse(localStorage .getItem("cart")) || [];
    setCart(storedCart);
    }, []
);

const 
}