import { useState } from "react"
import { Products } from "./components/Products"

import { products as initialProducts } from "./data/products.json"

function App() {
  // States
  //-------
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  });


  // Functions
  //----------

  const filterProducts = (products: any[]) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return (
    <Products products={filterProducts(products)} />
  )
}

export default App
