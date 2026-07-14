import { AddToCartIcon, RemoveFromCartIcon } from './Icons';

import { useCart } from '../hooks/useCart.hook'
import type { Product } from '../types';
import './Products.css';

export function Products({ products }: { products: Product[] }) {
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product: Product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li
              key={product.id}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
              />

              <div>
                <strong>{product.title} - </strong>
                <span>$ {product.price}</span>
              </div>

              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>

            </li>
          )
        }
        )}
      </ul>
    </main>
  )
}
