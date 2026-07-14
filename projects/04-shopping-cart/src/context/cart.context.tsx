import { createContext, useReducer, type ReactNode } from "react";
import { CART_ACTION_TYPES, cartInitialState, cartReducer } from "../reducers/cart.reducer";
import type { CartContextType, Product } from "../types";

export const CartContext = createContext<CartContextType | undefined>(undefined);

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product: Product) => dispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = (product: Product) => dispatch({
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

export function CartProvider({ children }: { children: ReactNode }) {
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
