import { useEffect, useState } from 'react'


import './App.css'
import { type User } from './types.d'
import { UsersTable } from './components/UsersTable'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async response => await response.json())
      .then(response => {
        setUsers(response.results)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const sortedUsers = sortByCountry
  // Se muta el array original
  ? users.toSorted((a, b) => {
    // Order ascendente
    return a.location.country.localeCompare(b.location.country)
  })
  : users

  return (
    <>
      <h1>Operation on Large Datasets</h1>
      <header>
        <button onClick={toggleColors}>
          Colorear Filas
        </button>

        <button onClick={toggleSortByCountry}>
          {sortByCountry ? 'No ordenar por país' : 'Ordenar por País'}
        </button>
      </header>
      <main>

      <UsersTable users={sortedUsers} showColors={showColors} />
      </main>
    </>
  )
}

export default App
