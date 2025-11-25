export type Player = 1 | 2;
export type CellValue = Player | 0; // 0 = Empty
export type Board = CellValue[][]; // 6 rows x 7 cols

export type GameStatus = "IN_PROGRESS" | "WIN_P1" | "WIN_P2" | "DRAW";

export interface GameState {
  board: Board;
  currentPlayer: Player;
  status: GameStatus;
  winner?: Player;
}
