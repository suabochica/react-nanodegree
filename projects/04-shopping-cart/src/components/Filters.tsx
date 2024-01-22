import { ChangeEvent, useState, useId } from 'react';

import './Filters.css';
import { useFilters } from '../hooks/useFilters.hook';

export function Filters() {

  // Fuente de verdad 1: estado global
  const { setFilters } = useFilters()

  // Ids: para el orden de llamada del elemento
  //-------------------------------------------

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  // States
  //-------

  // Fuente de verdad 2: estado local del componente
  const [minPrice, setMinPrice] = useState(0)

  // Functions
  //----------

  function handleChangeMinPrice(event: ChangeEvent<HTMLInputElement>) {
    // 👇 Esto huele mal
    // Tenemos dos fuentes de verdad
    setMinPrice(Number(event.target.value))

    setFilters(prevState => ({
      ...prevState,
      minPrice: Number(event.target.value)
    }))
  }

  function handleChangeCategory(event) {
    // 👇 Esto huele mal
    // Estamos pasandlo la función de actualizar estado
    // nativa de React a un componente hijo
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div><label htmlFor={categoryFilterId}></label>
        <select
          name=""
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Móviles</option>
        </select>
      </div>
    </section>
  )
}
