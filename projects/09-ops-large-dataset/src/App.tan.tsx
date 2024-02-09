import { useState, useMemo } from 'react'

import './App.css'
import { SortBy, type User } from './types.d'
import { useUsers } from './hooks/useUsers'
import { UsersTable } from './components/UsersTable'
import { Results } from './components/Results'

function App() {
  const {
    isLoading,
    isError,
    users,
    refetch,
    fetchNextPage,
    hasNextPage
  } = useUsers()

  // States
  // ------

  const [filterCountry, setFilterCountry] = useState(null)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [showColors, setShowColors] = useState(false)

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

  // FIXME: This function is not working b/c was thinking to use in local state of the component
  const handleDelete = (email: string) => {
    // const filteredUsers = users.filter((user) => user.email !== email)
    // setUsers(filteredUsers)
  }

  // FIXME: This function is not working b/c was thinking to use in local state of the component
  const handleReset = () => {
    void refetch()
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

  return (
    <>
      <h1>Operation on Large Datasets</h1>
      <Results />
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
        {!isLoading && !isError && hasNextPage === true && <button
          onClick={() => { void fetchNextPage() }}
        >Cargar más resultados</button>
        }
        {!isLoading && !isError && hasNextPage === false && <p>No hay más resultados</p>
        }
      </main>
    </>
  )
}

export default App
