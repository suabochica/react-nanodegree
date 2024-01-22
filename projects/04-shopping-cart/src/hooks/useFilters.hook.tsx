import { useContext } from "react";
import { FiltersContext } from "../context/useFilters.context";

// Custom Hooks
// ------------

export function useFilters() {

  // States
  // ------

  const { filters, setFilters } = useContext(FiltersContext);

  // Functions
  // ---------

  const filterProducts = (products) => {
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

  return { filters, filterProducts, setFilters }
}