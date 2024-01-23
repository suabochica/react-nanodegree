import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  // States
  // ------

  const [cart, setCart] = useState([]);

  // Functions
  // ---------

  const addToCart = product => {
    const productInCardIndex = cart.findIndex(item => item.id === product.id)

    if (productInCardIndex >= 0) {
      // Válido para arreglo pequeños
      const newCart = structuredClone(cart)

      newCart[productInCardIndex].quantity += 1

      return setCart(newCart)
    }

    // El producto no esta en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  );
}