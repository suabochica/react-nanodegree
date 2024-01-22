
import { AddToCartIcon } from "./Icons";
import './Products.css';

type Product = {
  id: number,
  title: string,
  price: number,
  thumbnail: string,
}

export function Products({ products }: Product[]) {
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map(product => (
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
              <button>
                <AddToCartIcon />
              </button>
            </div>

          </li>
        ))}
      </ul>
    </main>
  )
}