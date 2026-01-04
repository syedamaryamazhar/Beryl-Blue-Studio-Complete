import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD TO CART
  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }

      return [...prev, { ...product, qty }];
    });
  };

  // UPDATE QTY
  const updateQty = (id, qty) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty } : item
      ).filter(item => item.qty > 0)
    );
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
