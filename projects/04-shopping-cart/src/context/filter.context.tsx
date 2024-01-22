import { createContext, useState } from "react";

// 1. Crear el contexto
// Habilita el contexto que se va a consumir
// Esto es un singleton

export const FiltersContext = createContext();

// 2. Crear el provider, para proveer el contexto
// Provee el acceso al contexto

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  });

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

