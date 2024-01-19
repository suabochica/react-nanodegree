import { useState } from 'react'

import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}


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
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X)
  const updateBoard = (index: number) => {
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

  }

  return (
    <main className="board">
      <h1>Triqui</h1>
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
    </main >
  )
}

export default App
