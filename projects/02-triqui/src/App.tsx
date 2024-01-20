import { useState } from 'react';

import './App.css'
import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'

import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './utils/board'
import { saveGameToLocalStorage, resetGameFromLocalStorage } from './utils/localStorage'

function App() {

  // States
  //----------------------------------------

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');

    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');

    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState<boolean | null>(null)

  // Functions
  //----------------------------------------

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameFromLocalStorage();
  }

  const updateBoard = (index: number) => {
    // si la casilla ya está ocupada, ó ya hay ganador, no hacemos nada
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveGameToLocalStorage({
      board: newBoard,
      turn: newTurn
    });

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // empate
    }
  }

  return (
    <main className="board">
      <h1>Triqui</h1>

      <button onClick={resetGame}>Reiniciar juego</button>

      <section className='game'>
        {
          board.map((square: string, index: number) => (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          ))
        }
      </section>

      <section className="turn">
        <Square
          index={-1}
          isSelected={turn === TURNS.X}
        >
          {TURNS.X}
        </Square>
        <Square
          index={-1}
          isSelected={turn === TURNS.O}
        >
          {TURNS.O}
        </Square>
      </section >

      <WinnerModal
        winner={winner}
        resetGame={resetGame}
      />

    </main >
  )
}

export default App
