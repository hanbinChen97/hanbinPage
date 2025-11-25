# Connect 4 Game Engine (`_lib`)

This directory contains the core logic, types, and pure functions for the Connect 4 game. It is designed to be framework-agnostic and testable.

## Files

### `types.ts`
Defines the TypeScript types and interfaces used throughout the game.

```typescript
export type Player = 1 | 2;
export type CellValue = Player | 0; // 0 = Empty
export type Board = CellValue[][]; // 6 rows x 7 cols

export type GameStatus =
    | 'IN_PROGRESS'
    | 'WIN_P1'
    | 'WIN_P2'
    | 'DRAW';

export interface GameState {
    board: Board;
    currentPlayer: Player;
    status: GameStatus;
    winner?: Player;
}
```

### `engine.ts`
Contains the pure functions that drive the game rules.

#### Constants
- `ROWS`: 6
- `COLS`: 7

#### Functions

##### `initializeBoard(): Board`
Creates and returns a new 6x7 board filled with zeros (empty cells).
- **Returns**: `number[][]` (6 rows, 7 columns)

##### `getLowestEmptyRow(board: Board, col: number): number`
Finds the lowest available row index in a specific column.
- **Parameters**:
  - `board`: Current state of the board.
  - `col`: Column index (0-6) to check.
- **Returns**: Row index (0-5) or `-1` if the column is full.
- **Logic**: Iterates from the bottom row (`ROWS - 1`) up to `0`. Returns the first row where `board[row][col] === 0`.

##### `applyMove(board: Board, col: number, player: Player): Board`
Places a player's piece in the specified column.
- **Parameters**:
  - `board`: Current board state.
  - `col`: Column to drop the piece into.
  - `player`: `1` or `2`.
- **Returns**: A **new** board array (immutable update). If the move is invalid (column full), returns the original board.
- **Logic**:
  1. Calls `getLowestEmptyRow`.
  2. If valid, creates a deep copy of the board.
  3. Updates the cell at `[row][col]` with the `player` ID.

##### `checkWin(board: Board, player: Player): boolean`
Checks if the specified player has won the game.
- **Returns**: `true` if 4 consecutive pieces are found, `false` otherwise.
- **Logic**: Scans the board in 4 directions:
  1. **Horizontal**: Checks `[r][c]`, `[r][c+1]`, `[r][c+2]`, `[r][c+3]`.
  2. **Vertical**: Checks `[r][c]`, `[r+1][c]`, `[r+2][c]`, `[r+3][c]`.
  3. **Diagonal (Bottom-Left to Top-Right)**: Checks `[r][c]`, `[r-1][c+1]`, `[r-2][c+2]`, `[r-3][c+3]`.
  4. **Diagonal (Top-Left to Bottom-Right)**: Checks `[r][c]`, `[r+1][c+1]`, `[r+2][c+2]`, `[r+3][c+3]`.

##### `checkDraw(board: Board): boolean`
Checks if the game is a draw (board is full).
- **Returns**: `true` if the top row (`board[0]`) has no empty cells (`0`).
