import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addToCart = (product, qty = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => Number(item.id) === Number(product.id)
      );

      if (existingItem) {
        return prevCart.map((item) =>
          Number(item.id) === Number(product.id)
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }

      return [
        ...prevCart,
        {
          id: product.id,
          title: product.title || product.name,
          price: product.price,
          image: product.image,
          qty: qty,
        },
      ];
    });
  };


  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        Number(item.id) === Number(id)
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

const decreaseQty = (id) => {
  const item = cart.find(
    (item) => Number(item.id) === Number(id)
  );

  // Ask once BEFORE state update
  if (item && item.qty === 1) {
    const confirmRemove = window.confirm(
      "Quantity is 1. Do you want to remove this item?"
    );

    if (!confirmRemove) return;

    setCart((prevCart) =>
      prevCart.filter((item) => Number(item.id) !== Number(id))
    );
    return;
  }

  // qty > 1
  setCart((prevCart) =>
    prevCart.map((item) =>
      Number(item.id) === Number(id)
        ? { ...item, qty: item.qty - 1 }
        : item
    )
  );
};



  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => Number(item.id) !== Number(id))
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  return useContext(CartContext);
};
