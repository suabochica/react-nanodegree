import { Square } from "./Square";

type WinnerModalProps = {
  winner: string | boolean | null
  resetGame: () => void
}

export function WinnerModal({ winner, resetGame }: WinnerModalProps) {
  if (winner === null) return null;

  const winnerText = winner === false ? 'Empate' : 'Ganó';

  return (
    <section className="winner">
      <div className="text">

        <h2>
          {winnerText}
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
