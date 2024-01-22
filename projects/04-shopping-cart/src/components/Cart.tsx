import { useId } from "react"

import { CartIcon, ClearCartIcon } from "./Icons"
import './Cart.css'

export function Cart() {
  const cartCheckboxId = useId()

  return (
    <>
      <label htmlFor={cartCheckboxId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />
      <aside className="cart">
        <ul>
          <li>
            <img src="https://i.dummyjson.com/data/products/6/thumbnail.png" alt="MacBook Pro" />
            <div><strong>MacBook Pro</strong> - $1799</div>
            <footer>
              <small>
                Cantidad: 1
              </small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )

}
