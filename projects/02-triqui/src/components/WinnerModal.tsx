import { Square } from "./Square";

type WinnerModalProps = {
  winner: string | boolean | null
  resetGame: () => void
}

export function WinnerModal({ winner, resetGame }: WinnerModalProps) {
  if (winner === null) return null;

  const isDraw = winner === false;
  const winnerText = isDraw ? 'Empate' : 'Ganó';

  return (
    <section className="winner">
      <div className="text">

        <h2>
          {winnerText}
        </h2>

        {
          typeof winner === 'string' && (
            <header className="win">
              <Square index={-1}>{winner}</Square>
            </header>
          )
        }

        <footer>
          <button onClick={resetGame}>Nuevo Juego</button>
        </footer>
      </div>
    </section>
  )
}
