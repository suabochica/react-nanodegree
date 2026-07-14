import type { CartItem, CartAction } from "../types";

export const cartInitialState: CartItem[] = JSON.parse(window.localStorage.getItem('cart') ?? '[]');

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
} as const;

export const updateLocalStorage = (state: CartItem[]) => {
  window.localStorage.setItem('cart', JSON.stringify(state));
}

export const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = action.payload;
      const productInCardIndex = state.findIndex((item: CartItem) => item.id === id)

      if (productInCardIndex >= 0) {
        const newState = structuredClone(state)

        newState[productInCardIndex].quantity += 1

        return newState
      }

      const newState = [
        ...state,
        {
          ...action.payload,
          quantity: 1
        }
      ]

      updateLocalStorage(newState)

      return newState
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = action.payload;
      const newState = state.filter((item: CartItem) => item.id !== id);

      updateLocalStorage(newState);

      return newState;
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage(cartInitialState);

      return cartInitialState;
    }
  }

  return state
}
