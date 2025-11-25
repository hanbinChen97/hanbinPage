太棒了，**Step-by-Step** 是最稳健的开发方式。将 **PvP (双人对战)** 作为第一阶段，可以让你在处理复杂的 AI 算法之前，先确保核心的 **Game Loop (游戏循环)** 和 **UI Interaction (交互)** 是完美的。

这是为您量身定制的 **Updated TDD Development Plan**。

-----

# 📅 Project: Connect 4 (Next.js + Vitest)

**核心策略:** 分阶段 TDD。先完成 **Milestone 1 (PvP)**，确保游戏可玩；再进行 **Milestone 2 (AI)**。

## 📁 最终文件结构预览 (Target Structure)

我们将测试文件 (**`*.test.ts`**) 与源代码放在一起 (Colocation)，方便 TDD 时的 **Red-Green** 循环。

```bash
app/connect4/
└── page.tsx              # Server Component (Entry)

components/connect4/
├── GameBoard.tsx         # 🎮 Controller (Client Component)
├── GameBoard.test.tsx    # 🧪 Integration Test (UI Behavior)
├── GridView.tsx          # 🎨 View (Pure UI)
└── Cell.tsx              # 🎨 View (Pure UI)

lib/connect4/
├── types.ts              # Definitions
├── engine.ts             # 🧠 Model: Core Rules (PvP Logic)
├── engine.test.ts        # 🧪 Unit Test: Rules verification
├── ai.ts                 # 🤖 Model: AI Algo (Added in Phase 2)
└── ai.test.ts            # 🧪 Unit Test: AI Behavior (Added in Phase 2)
```

-----

## 🚩 Milestone 1: Local PvP (双人对战)

在这个阶段，我们只关注 **Rules (规则)** 和 **Rendering (渲染)**。不涉及任何 AI。

### 🔹 Phase 1.1: Core Data & Gravity (Model Layer)

**Goal:** 能够初始化棋盘，并且实现“重力”落子。

  * **File:** `lib/connect4/engine.test.ts`
  * **Cycles:**
    1.  **🔴 Red:** Test `initializeBoard()` returns 6x7 grid filled with `0`.
          * **🟢 Green:** Implement function in `engine.ts`.
    2.  **🔴 Red:** Test `getLowestEmptyRow(board, col)`.
          * Case: Empty column returns `5` (bottom).
          * Case: Full column returns `-1`.
          * **🟢 Green:** Implement logic loop.
    3.  **🔴 Red:** Test `applyMove(board, col, player)`.
          * **Critical:** Verify **Immutability** (returns a *new* array ref, original is untouched).
          * **🟢 Green:** Use `structuredClone` or spread syntax.

### 🔹 Phase 1.2: Win & Draw Logic (Model Layer)

**Goal:** 能够识别游戏结束。

  * **File:** `lib/connect4/engine.test.ts`
  * **Cycles:**
    1.  **🔴 Red:** Test `checkWin()` - **Horizontal**.
          * Mock a board with 3 reds in a row, place the 4th, expect `true`.
          * **🟢 Green:** Implement horizontal check loop.
    2.  **🔴 Red:** Test `checkWin()` - **Vertical**.
          * **🟢 Green:** Implement vertical check loop.
    3.  **🔴 Red:** Test `checkWin()` - **Diagonal**.
          * **🟢 Green:** Implement diagonal checks.
    4.  **🔴 Red:** Test `checkDraw()`.
          * Mock a board where top row (Row 0) is full but no winner.
          * **🟢 Green:** Check if Row 0 has any `0`.

### 🔹 Phase 1.3: The Controller & UI (Integration Layer)

**Goal:** 将逻辑连接到 React 组件，让用户可以交互。

  * **File:** `components/connect4/GameBoard.test.tsx` (using React Testing Library)
  * **Cycles:**
    1.  **🔴 Red:** Test **Render**.
          * Render `<GameBoard />`. Check if 42 cells exist (`screen.getAllByRole(...)`).
          * **🟢 Green:** Create `GameBoard.tsx`, `GridView.tsx`, `Cell.tsx` skeleton.
    2.  **🔴 Red:** Test **Interaction (Drop Piece)**.
          * Simulate click on Column 0.
          * Expect the bottom-left cell to have class/style for "Player 1".
          * **🟢 Green:** Implement `handleDrop` inside `GameBoard`, calling `engine.applyMove`.
    3.  **🔴 Red:** Test **Turn Switching**.
          * Click Col 0 (P1) -\> Click Col 1 (P2).
          * Expect internal state `currentPlayer` to toggle.
          * **🟢 Green:** Add `setCurrentPlayer` logic.
    4.  **🔴 Red:** Test **Game Over Display**.
          * Simulate clicks to create a win.
          * Expect text "Player 1 Wins\!" to appear.
          * **🟢 Green:** Integrate `engine.checkWin` into the component flow.

-----

## 🚩 Milestone 2: AI Opponent (人机对战)

只有在 Milestone 1 完全稳定（**All Tests Passed**）后，才开始这一步。

### 🔹 Phase 2.1: Evaluation Heuristics (Model Layer)

**Goal:** 教会电脑识别“好棋”和“坏棋”。

  * **File:** `lib/connect4/ai.test.ts`
  * **Cycles:**
    1.  **🔴 Red:** Test `evaluateBoard()`.
          * Scenario: AI has 3-in-a-row vs AI has 1 piece. Expect Score A \> Score B.
          * **🟢 Green:** Implement basic scoring rules in `ai.ts`.

### 🔹 Phase 2.2: Minimax Decision (Model Layer)

**Goal:** 预测未来几步。

  * **File:** `lib/connect4/ai.test.ts`
  * **Cycles:**
    1.  **🔴 Red:** Test **Defense (Blocking)**.
          * Setup: Player 1 has 3-in-a-row.
          * Expect: `getBestMove` returns the blocking column.
          * **🟢 Green:** Implement Minimax recursion (Depth 1 or 2 first).
    2.  **🔴 Red:** Test **Offense (Winning)**.
          * Setup: AI has 3-in-a-row.
          * Expect: `getBestMove` returns the winning column.
          * **🟢 Green:** Refine Minimax logic.

### 🔹 Phase 2.3: AI Integration (Controller Layer)

**Goal:** 让 AI 自动响应玩家的操作。

  * **File:** `components/connect4/GameBoard.test.tsx`
  * **Cycles:**
    1.  **🔴 Red:** Test **AI Response**.
          * Set mode to 'PvE'. Player 1 clicks.
          * Expect: After a delay/flush, a second move (AI's) appears on the board automatically.
          * **🟢 Green:** Add `useEffect` in `GameBoard.tsx` to trigger AI move when `currentPlayer === 2`.

-----

## 🚀 Ready to Start?

按照这个计划，您的第一步是 **Milestone 1 - Phase 1.1**。

您需要我为您生成 **Step 1 (Setup & First Test)** 的代码吗？ (Setup `lib/connect4/types.ts` and `engine.test.ts`)

-----

## 🛠️ Technical Specifications

### 1. Data Structures (`lib/connect4/types.ts`)

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
  winner?: Player; // Optional, redundant but useful for UI
}
```

### 2. Component Props (`components/connect4/*.tsx`)

#### `GameBoard.tsx` (Container)
- **State:** `GameState` (managed via `useReducer` or `useState`)
- **Responsibility:** 
    - Holds the "Source of Truth".
    - Handles `handleDrop(colIndex)`.
    - Switches turns.
    - Checks for Win/Draw after every move.

#### `GridView.tsx` (Presentational)
```typescript
interface GridViewProps {
  board: Board;
  onColumnClick: (colIndex: number) => void;
  interactive: boolean; // False if game over or computer thinking
}
```

#### `Cell.tsx` (Presentational)
```typescript
interface CellProps {
  value: CellValue;
  rowIndex: number;
  colIndex: number;
}
```