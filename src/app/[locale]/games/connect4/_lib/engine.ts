import {Board, Player} from "./types";

export const ROWS = 6;
export const COLS = 7;

export function initializeBoard(): Board {
  const board: Board = [];
  for (let i = 0; i < ROWS; i++) {
    board.push(Array(COLS).fill(0));
  }
  return board;
}

export function getLowestEmptyRow(board: Board, col: number): number {
  for (let row = ROWS - 1; row >= 0; row--) {
    if (board[row][col] === 0) {
      return row;
    }
  }
  return -1;
}

export function applyMove(board: Board, col: number, player: Player): Board {
  const row = getLowestEmptyRow(board, col);
  if (row === -1) {
    return board; // Column full, no change
  }

  // Create a deep copy of the board
  const newBoard = board.map((r) => [...r]);
  newBoard[row][col] = player;
  return newBoard;
}

export function checkWin(board: Board, player: Player): boolean {
  // Horizontal
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS - 3; c++) {
      if (
        board[r][c] === player &&
        board[r][c + 1] === player &&
        board[r][c + 2] === player &&
        board[r][c + 3] === player
      ) {
        return true;
      }
    }
  }

  // Vertical
  for (let r = 0; r < ROWS - 3; r++) {
    for (let c = 0; c < COLS; c++) {
      if (
        board[r][c] === player &&
        board[r + 1][c] === player &&
        board[r + 2][c] === player &&
        board[r + 3][c] === player
      ) {
        return true;
      }
    }
  }

  // Diagonal (bottom-left to top-right)
  for (let r = 3; r < ROWS; r++) {
    for (let c = 0; c < COLS - 3; c++) {
      if (
        board[r][c] === player &&
        board[r - 1][c + 1] === player &&
        board[r - 2][c + 2] === player &&
        board[r - 3][c + 3] === player
      ) {
        return true;
      }
    }
  }

  // Diagonal (top-left to bottom-right)
  for (let r = 0; r < ROWS - 3; r++) {
    for (let c = 0; c < COLS - 3; c++) {
      if (
        board[r][c] === player &&
        board[r + 1][c + 1] === player &&
        board[r + 2][c + 2] === player &&
        board[r + 3][c + 3] === player
      ) {
        return true;
      }
    }
  }

  return false;
}

export function checkDraw(board: Board): boolean {
  // If the top row has no empty cells, the board is full
  return board[0].every((cell) => cell !== 0);
}
