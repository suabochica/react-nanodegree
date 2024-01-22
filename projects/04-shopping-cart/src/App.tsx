import { useState } from "react"

import { IS_DEVELOPMENT } from "./config"

import { products as initialProducts } from "./data/products.json"

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Products } from "./components/Products"

import { useFilters } from "./hooks/useFilters.hook"


function App() {

  // States
  // ------

  const [products] = useState(initialProducts);
  const { filters, filterProducts } = useFilters();

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App
