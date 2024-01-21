
import { AddToCartIcon } from "./Icons";

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
        {products.map(product => (
          <li
            key={product.id}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
            />

            <div>
              <h3>{product.title}</h3>
              <span>{product.price}</span>
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