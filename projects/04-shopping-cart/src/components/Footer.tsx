import './Footer.css'

export function Footer({ filters }) {
  return (
    <footer className="footer">
      {
        JSON.stringify(filters, null, 2)
      }
      { /*

      <h4>
        ⚛️ Shopping cart️ - <span>@suabochica</span>
      </h4>
      <h5>Entendiendo <code>useContext</code> & <code>useReducer</code></h5>
    */}
    </footer>
  )
}
