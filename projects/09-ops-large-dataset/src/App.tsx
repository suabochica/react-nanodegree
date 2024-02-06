import { useEffect, useState, useRef, useMemo } from 'react'


import './App.css'
import { type User } from './types.d'
import { UsersTable } from './components/UsersTable'

function App() {

  // States
  // ------

  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)
  const [filterCountry, setFilterCountry] = useState(null)

  // Ref
  // ---

  const originalUsers = useRef<User[]>([])

  // Effects
  // -------

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async response => await response.json())
      .then(response => {
        setUsers(response.results)
        originalUsers.current = response.results
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

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  // Utils
  // -------

  const filteredUsers = useMemo(() => {
      return filterCountry !== null && filterCountry.length > 0
      ? users.filter(user => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    return sortByCountry
      // Se muta el array original
      ? filteredUsers.toSorted((a, b) =>
      // Order ascendente
      a.location.country.localeCompare(b.location.country)
    )
    : filteredUsers
  }, [filteredUsers, sortByCountry])

  // 👇🏾 Code below promotes a performance problem of filter and sort the users
  // with every render, even if the users array has not changed. useMemo to the rescue
  // -----------------------------------------------------------

  // const filteredUsers = (() => {
  //   console.log('calculate filteredUsers')
  //   return filterCountry != null && filterCountry.length > 0
  //     ? users.filter(user => {
  //       return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
  //     })
  //     : users
  // })()

  // const sortedUsers = (() => {
  //   console.log('calculate sortedUsers')

  //   return sortByCountry
  //     ? filteredUsers.toSorted(
  //       (a, b) => a.location.country.localeCompare(b.location.country)
  //     )
  //     : filteredUsers
  // })()

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

        <button onClick={handleReset}>
          Reiniciar Usuarios
        </button>

        <input
          placeholder="Filtra por país"
          type="text"
          onChange={(event) => setFilterCountry(event.target.value)}
        />
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
