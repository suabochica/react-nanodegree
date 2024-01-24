import { createContext, useReducer, useState } from "react";
import { CART_ACTION_TYPES, cartInitialState, cartReducer } from "../reducers/cart.reducer";

export const CartContext = createContext();

// Version for context
// -------------------

function CartProviderContext({ children }) {

  // States
  // ------

  const [cart, setCart] = useState([]);

  // Functions for the context
  // -------------------------

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

// Version for Reducer
// -------------------

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = product => dispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    payload: product
  })

  const clearCart = () => dispatch({
    type: CART_ACTION_TYPES.CLEAR_CART
  })

  return {
    state,
    addToCart,
    removeFromCart,
    clearCart
  }
}

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  );
}
