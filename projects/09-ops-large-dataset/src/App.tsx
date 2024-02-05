import { useEffect, useState } from 'react'


import './App.css'
import { type User } from './types.d'

function App() {
  const [users, setUsers] = useState<User[]>([])

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

  return (
    <>
      <h1>Operation on Large Datasets</h1>
      {JSON.stringify(users)}
    </>
  )
}

export default App
