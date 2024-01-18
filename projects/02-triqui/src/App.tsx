import './App.css'

const TURNS = {
  X: 'X',
  O: 'O'
}

const board = Array(9).fill(null);

type SquareProps = {
  children: number
  updateBoard: (index: number) => void
  index: number
}

const Square = ({ children, updateBoard, index }: SquareProps) => {
  return (
    <button className='square' onClick={() => updateBoard(index)}>
      {children}
    </button>
  )
}

function App() {
  return (
    <main className="board">
      <h1>Triqui</h1>
      <section className='game'>
        {
          board.map((_, index) => (
            <Square
              key={index}
              index={index}
            >
              {index}
            </Square>
          ))
        }
      </section>
    </main>
  )
}

export default App
