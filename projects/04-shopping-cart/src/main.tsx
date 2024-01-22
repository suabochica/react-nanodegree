import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import { FiltersProvider } from './context/useFilters.context.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
