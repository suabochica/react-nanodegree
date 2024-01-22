import { useContext } from "react";
import { CartContext } from "../context/cart.context";

export const useCart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  if (cart === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return { cart, addToCart, removeFromCart, clearCart };
}