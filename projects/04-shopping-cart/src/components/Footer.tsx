import { useCart } from '../hooks/useCart.hook'
import { useFilters } from '../hooks/useFilters.hook'
import './Footer.css'

export function Footer() {
  const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className="footer">
      <h4>
        ⚛️ Shopping cart️ - <span>@suabochica</span>
      </h4>
      <h5>Entendiendo useContext & setReducer</h5>
    </footer>
  )
}
