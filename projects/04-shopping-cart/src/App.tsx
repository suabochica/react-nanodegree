import { useState } from "react"

import { IS_DEVELOPMENT } from "./config"

import { products as initialProducts } from "./data/products.json"

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Products } from "./components/Products"
import { Cart } from "./components/Cart";

import { useFilters } from "./hooks/useFilters.hook"
import { CartProvider } from "./context/cart.context";


function App() {

  // States
  // ------

  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
