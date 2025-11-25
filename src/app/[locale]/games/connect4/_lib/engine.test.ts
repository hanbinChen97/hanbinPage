import {describe, expect, it} from "vitest";

import {
  applyMove,
  checkDraw,
  checkWin,
  COLS,
  getLowestEmptyRow,
  initializeBoard,
  ROWS,
} from "./engine";

describe("Connect 4 Engine", () => {
  describe("initializeBoard", () => {
    it("should return a 6x7 grid filled with 0", () => {
      const board = initializeBoard();
      expect(board).toHaveLength(ROWS);
      board.forEach((row) => {
        expect(row).toHaveLength(COLS);
        expect(row.every((cell) => cell === 0)).toBe(true);
      });
    });
  });

  describe("getLowestEmptyRow", () => {
    it("should return 5 for an empty column", () => {
      const board = initializeBoard();
      expect(getLowestEmptyRow(board, 0)).toBe(5);
    });

    it("should return -1 for a full column", () => {
      const board = initializeBoard();
      // Fill column 0
      for (let i = 0; i < ROWS; i++) {
        board[i][0] = 1;
      }
      expect(getLowestEmptyRow(board, 0)).toBe(-1);
    });
  });

  describe("applyMove", () => {
    it("should place a piece in the lowest empty row", () => {
      const board = initializeBoard();
      const newBoard = applyMove(board, 0, 1);
      expect(newBoard[5][0]).toBe(1);
      expect(newBoard[4][0]).toBe(0);
    });

    it("should return a new board instance (immutability)", () => {
      const board = initializeBoard();
      const newBoard = applyMove(board, 0, 1);
      expect(newBoard).not.toBe(board);
      expect(board[5][0]).toBe(0); // Original board unchanged
    });
  });

  describe("checkWin", () => {
    it("should detect horizontal win", () => {
      const board = initializeBoard();
      // P1: (5,0), (5,1), (5,2), (5,3)
      board[5][0] = 1;
      board[5][1] = 1;
      board[5][2] = 1;
      board[5][3] = 1;
      expect(checkWin(board, 1)).toBe(true);
    });

    it("should detect vertical win", () => {
      const board = initializeBoard();
      // P1: (5,0), (4,0), (3,0), (2,0)
      board[5][0] = 1;
      board[4][0] = 1;
      board[3][0] = 1;
      board[2][0] = 1;
      expect(checkWin(board, 1)).toBe(true);
    });

    it("should detect diagonal win (bottom-left to top-right)", () => {
      const board = initializeBoard();
      // P1: (5,0), (4,1), (3,2), (2,3)
      board[5][0] = 1;
      board[4][1] = 1;
      board[3][2] = 1;
      board[2][3] = 1;
      expect(checkWin(board, 1)).toBe(true);
    });

    it("should detect diagonal win (top-left to bottom-right)", () => {
      const board = initializeBoard();
      // P1: (2,0), (3,1), (4,2), (5,3)
      board[2][0] = 1;
      board[3][1] = 1;
      board[4][2] = 1;
      board[5][3] = 1;
      expect(checkWin(board, 1)).toBe(true);
    });
  });
  describe("checkDraw", () => {
    it("should detect a draw when board is full and no winner", () => {
      const board = initializeBoard();
      // Fill board with a pattern that doesn't win
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          board[r][c] = (((r + c) % 2) + 1) as 1 | 2;
        }
      }
      expect(checkDraw(board)).toBe(true);
    });

    it("should not detect a draw if board is not full", () => {
      const board = initializeBoard();
      expect(checkDraw(board)).toBe(false);
    });
  });
});
