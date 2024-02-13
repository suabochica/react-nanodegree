import { useQuery } from "@tanstack/react-query"
import * as React from "react"

function App() {
  // React query client
  // const queryClient = useQuery()

  // State
  // ------

  // Hooks
  // ------

  // Handlers
  // --------
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <main className='grid h-screen grid-cols-2'>
      <div className="col-span-1 p-8 bg-white">
        <h1>Comments</h1>
      </div>

      <div className="col-span-1 p-8 bg-black">
        <form action="" className="block max-w-xl px-4 m-auto" onSubmit={handleSubmit}>

        </form>
      </div>
    </main>
  )
}

export default App
