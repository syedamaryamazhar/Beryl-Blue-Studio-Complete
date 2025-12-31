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

}