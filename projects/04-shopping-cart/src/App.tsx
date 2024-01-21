import { Products } from "./components/Products"

import { products } from "./data/products.json"

function App() {

  return (
    <Products products={products} />
  )
}

export default App
