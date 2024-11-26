import './App.css'
import { useState } from 'react'

function App() {
  // const [status, setSatus] = useState<"initial" | "playing" | "finished">
  // const [time, setTime] = useState<number>(0)
  // const [score, setScore] = useState<number>(0)

  return (
    <main>
      <header>
        <h1>{0} puntos</h1>
        <h1>{0} segundos</h1>
      </header>

      <section>
        <span>Blanco</span>
      </section>

      <footer>
        <button>Jugar</button>
      </footer>
    </main>
  )
}

export default App
