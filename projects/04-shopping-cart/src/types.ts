export interface Product {
  id: number
  title: string
  price: number
  thumbnail: string
  category: string
  description?: string
  discountPercentage?: number
  rating?: number
  stock?: number
  brand?: string
  images?: string[]
}

export interface CartItem extends Product {
  quantity: number
}

export interface Filters {
  category: string
  minPrice: number
}

export interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
  clearCart: () => void
}

export interface FiltersContextType {
  filters: Filters
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: Product }
  | { type: 'CLEAR_CART' }
