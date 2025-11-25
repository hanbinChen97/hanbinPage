# Connect 4 UI Components (`_components`)

This directory contains the React components that render the game interface.

## Components

### `GameBoard.tsx`
The main container component that manages the game state and coordinates interactions.

- **State Management**: Uses `useReducer` to handle complex state transitions.
  - **State**: `board`, `currentPlayer`, `status`, `winner`.
  - **Actions**:
    - `DROP_PIECE`: Triggers a move in a specific column.
    - `RESET`: Resets the game to the initial state.
- **Render**:
  - Displays the game title and current status (Player turn, Win, Draw).
  - Renders the `GridView` component.
  - Renders a "Reset Game" button.

### `GridView.tsx`
Renders the 7x6 game grid.

- **Props**:
  - `board`: The current `Board` state.
  - `onColumnClick`: Callback function when a column is clicked.
  - `interactive`: Boolean to enable/disable clicks (disabled when game is over).
- **Structure**:
  - Uses CSS Grid (`grid-cols-7`) to layout the cells.
  - Maps through the `board` array to render `Cell` components.
  - Wraps columns in clickable areas to handle user input.

### `Cell.tsx`
Visual representation of a single slot on the board.

- **Props**:
  - `value`: `0` (Empty), `1` (Player 1), or `2` (Player 2).
  - `rowIndex`, `colIndex`: Position coordinates (used for keys/debugging).
- **Styling**:
  - **Empty**: `bg-neutral-900`
  - **Player 1**: `bg-red-500` with inner shadow.
  - **Player 2**: `bg-yellow-500` with inner shadow.
  - All cells have `rounded-full` to look like holes/tokens.

## Usage
These components are composed in `GameBoard.tsx`, which is then imported by the main page.
