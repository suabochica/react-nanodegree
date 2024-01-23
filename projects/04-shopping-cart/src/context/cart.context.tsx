import { createContext, useReducer, useState } from "react";

export const CartContext = createContext();

const initialState = [];


const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload;
      const productInCardIndex = state.findIndex(item => item.id === id)

      if (productInCardIndex >= 0) {
        // Válido para arreglo pequeños
        const newState = structuredClone(state)

        newState[productInCardIndex].quantity += 1

        return newState
      }

      return [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1
        }
      ]
    }

    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload;

      return state.filter(item => item.id !== id)
    }

    case 'CLEAR_CART': {
      return initialState
    }
  }

  return state
}


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

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })

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
