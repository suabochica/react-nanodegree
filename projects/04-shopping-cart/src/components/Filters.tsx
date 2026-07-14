import { ChangeEvent, useId } from 'react';

import './Filters.css';
import { useFilters } from '../hooks/useFilters.hook';
import type { Filters } from '../types';

export function Filters() {

  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  function handleChangeMinPrice(event: ChangeEvent<HTMLInputElement>) {
    setFilters((prevState: Filters) => ({
      ...prevState,
      minPrice: Number(event.target.value)
    }))
  }

  function handleChangeCategory(event: ChangeEvent<HTMLSelectElement>) {
    setFilters((prevState: Filters) => ({
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
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
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
