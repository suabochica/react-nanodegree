import { useEffect, useState } from 'react'


import './App.css'
import { type User } from './types.d'
import { UsersTable } from './components/UsersTable'

function App() {

  // States
  // ------

  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)

  // Effects
  // -------

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

  // Toggles
  // -------

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState)
  }

  // Handlers
  // -------

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }


  // Utils
  // -------

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
        <UsersTable
          users={sortedUsers}
          showColors={showColors}
          deleteUser={handleDelete}
        />
      </main>
    </>
  )
}

export default App
