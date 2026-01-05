import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /* =========================
     ADD TO CART
  ========================== */
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

  /* =========================
     INCREASE QUANTITY
  ========================== */
  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        Number(item.id) === Number(id)
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  /* =========================
     DECREASE QUANTITY
  ========================== */
  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          Number(item.id) === Number(id)
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  /* =========================
     REMOVE ITEM (OPTIONAL)
  ========================== */
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

/* =========================
   CUSTOM HOOK
========================== */
export const useCart = () => {
  return useContext(CartContext);
};
