import { useState } from "react"
import { Products } from "./components/Products"

import { products as initialProducts } from "./data/products.json"
import { Header } from "./components/Header";

// Custom Hooks
// ------------

function useFilters() {

  // States
  // ------

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  });


  // Functions
  // ---------

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

  return { filterProducts, setFilters }
}

function App() {

  // States
  // ------

  const [products] = useState(initialProducts);
  const { filterProducts, setFilters } = useFilters();

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
