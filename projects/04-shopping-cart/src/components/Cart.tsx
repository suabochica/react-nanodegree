import { useId } from "react"

import './Cart.css'

import { CartIcon, ClearCartIcon } from "./Icons"
import { useCart } from "../hooks/useCart.hook"
import type { CartItem } from "../types"

function CartItem({ thumbnail, price, title, quantity, addToCart }: {
  thumbnail: string
  price: number
  title: string
  quantity: number
  addToCart: () => void
}) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div><strong>{title}</strong> - ${price}</div>
      <footer>
        <small>
          Cantidad: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, addToCart, clearCart } = useCart()

  return (
    <>
      <label htmlFor={cartCheckboxId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />
      <aside className="cart">
        <ul>
          {
            cart.map((product: CartItem) => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
              />
            ))
          }
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )

}
