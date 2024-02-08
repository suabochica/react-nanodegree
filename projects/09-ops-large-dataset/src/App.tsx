import { useEffect, useState, useRef, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'

import './App.css'
import { SortBy, type User } from './types.d'
import { UsersTable } from './components/UsersTable'

const fetchUsers = async (page: number) => {
  return await fetch(`https://randomuser.me/api?results=10&seed=suabochica&page=${page}`)
    .then(async response => {
      if (!response.ok) throw new Error('Error en la petición')
      return await response.json()
    })
    .then(response => response.results)
}

function App() {
  const { isLoading, isError, data: users = [] } = useQuery<User[]>(
    ['users'],
    async () => fetchUsers(1)
  )
  // States
  // ------

  const [filterCountry, setFilterCountry] = useState(null)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [showColors, setShowColors] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  // Ref
  // ---

  // const originalUsers = useRef<User[]>([])

  // Toggles
  // -------

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE
      ? SortBy.COUNTRY
      : SortBy.NONE

    setSorting(newSortingValue)
  }

  // Handlers
  // -------

  const handleDelete = (email: string) => {
    // const filteredUsers = users.filter((user) => user.email !== email)
    // setUsers(filteredUsers)
  }

  const handleReset = () => {
    // setUsers(originalUsers.current)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
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
    if (sorting === SortBy.NONE) {
      return filteredUsers
    }

    const compareProperties: Record<string, (user: User) => string> = {
      [SortBy.COUNTRY]: user => user.location.country,
      [SortBy.NAME]: user => user.name.first,
      [SortBy.LAST]: user => user.name.last
    }

    return filteredUsers.toSorted((a, b) => {
      const extractProperty = compareProperties[sorting]

      return extractProperty(a).localeCompare(extractProperty(b))
    })
  }, [filteredUsers, sorting])

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
          {sorting === SortBy.COUNTRY ? 'No ordenar por país' : 'Ordenar por País'}
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
        {/** TODO: Move the loading handling to a component, using early return */}
        {!isLoading && !isError && users.length > 0 &&
          <UsersTable
            users={sortedUsers}
            showColors={showColors}
            deleteUser={handleDelete}
            changeSorting={handleChangeSort}
          />
        }
        {isLoading && <p>Cargando...</p>}
        {isError && <p>Ha habido un error</p>}
        {!isLoading && !isError && users.length === 0 && <p>No hay usuarios</p>}

        {!isLoading && !isError && <button
          onClick={() => setCurrentPage(currentPage + 1)}
        >Cargar más resultados</button>
        }
      </main>
    </>
  )
}

export default App
