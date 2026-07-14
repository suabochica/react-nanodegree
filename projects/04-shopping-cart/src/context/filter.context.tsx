import { createContext, useState, type ReactNode } from "react";
import type { Filters, FiltersContextType } from "../types";

export const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filters>({
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
