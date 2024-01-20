import { WINNER_COMBINATIONS } from "../constants";

type Board = string[];

export const checkWinner = (boardToCheck: Board) => {
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

export const checkEndGame = (boardToCheck: Board) => {
  return boardToCheck.every((square) => square !== null);
}
