import { useState } from 'react'

import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const WINNER_COMBINATIONS = [
  [0, 1, 2], // primera fila
  [3, 4, 5], // segunda fila
  [6, 7, 8], // tercera fila
  [0, 3, 6], // primera columna
  [1, 4, 7], // segunda columna
  [2, 5, 8], // tercera columna
  [0, 4, 8], // diagonal izquierda
  [2, 4, 6], // diagonal derecha
]

type SquareProps = {
  children: string
  updateBoard?: (index: number) => void
  index: number
  isSelected?: boolean
}

const Square = ({ children, isSelected, updateBoard, index }: SquareProps) => {
  const selectedClass = isSelected ? 'square is-selected' : 'square'
  const handleClick = () => {
    if (updateBoard) {
      updateBoard(index);
    }
  }

  return (
    <div className={selectedClass} onClick={handleClick}>
      {children}
    </div>
  )
}

function App() {

  // States
  //----------------------------------------

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState<string | null>(null)

  // Functions
  //----------------------------------------

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBINATIONS) {
      const [a, b, c] = combo;

      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }

    return null;
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  const updateBoard = (index: number) => {
    // si la casilla ya está ocupada, ó ya hay ganador, no hacemos nada
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      setWinner(newWinner);
    }
  }

  return (
    <main className="board">
      <h1>Triqui</h1>

      <button onClick={resetGame}>Reiniciar juego</button>

      <section className='game'>
        {
          board.map((_, index) => (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          ))
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section >

      {
        winner && (
          <section className="winner">
            <div className="text">

              <h2>
                {
                  winner === false
                    ? "Empate"
                    : "Ganó"
                }
              </h2>

              <header className="win">
                {
                  winner && <Square>{winner}</Square>
                }
              </header>

              <footer>
                <button onClick={resetGame}>Nuevo Juego</button>
              </footer>
            </div>
          </section>
        )
      }


    </main >
  )
}

export default App
