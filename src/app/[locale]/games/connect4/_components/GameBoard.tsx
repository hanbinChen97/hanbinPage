"use client";

import React, {useReducer} from "react";

import {
  applyMove,
  checkDraw,
  checkWin,
  initializeBoard,
} from "../_lib/engine";
import {GameState, GameStatus} from "../_lib/types";
import GridView from "./GridView";

const initialState: GameState = {
  board: initializeBoard(),
  currentPlayer: 1,
  status: "IN_PROGRESS",
};

type Action = { type: "DROP_PIECE"; col: number } | { type: "RESET" };

// eslint-disable-next-line react-memo/require-memo
function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "DROP_PIECE": {
      if (state.status !== "IN_PROGRESS") return state;

      const newBoard = applyMove(state.board, action.col, state.currentPlayer);
      if (newBoard === state.board) return state; // Column full

      let newStatus: GameStatus = state.status;
      let winner = state.winner;

      if (checkWin(newBoard, state.currentPlayer)) {
        newStatus = state.currentPlayer === 1 ? "WIN_P1" : "WIN_P2";
        winner = state.currentPlayer;
      } else if (checkDraw(newBoard)) {
        newStatus = "DRAW";
      }

      return {
        board: newBoard,
        currentPlayer: state.currentPlayer === 1 ? 2 : 1,
        status: newStatus,
        winner,
      };
    }
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const GameBoard = React.memo(function GameBoard() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDrop = React.useCallback((col: number) => {
    dispatch({type: "DROP_PIECE", col});
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-3xl font-bold text-neutral-100">Connect 4</h1>
      <div className="mb-4" data-testid="status">
        {state.status === "IN_PROGRESS" && (
          <p className="text-xl text-neutral-200">
            Current Player:{" "}
            <span
              className={
                state.currentPlayer === 1
                  ? "text-red-500 font-bold"
                  : "text-yellow-500 font-bold"
              }
            >
              Player {state.currentPlayer}
            </span>
          </p>
        )}
        {state.status === "WIN_P1" && (
          <p className="text-2xl text-red-500 font-bold animate-bounce">
            Player 1 Wins!
          </p>
        )}
        {state.status === "WIN_P2" && (
          <p className="text-2xl text-yellow-500 font-bold animate-bounce">
            Player 2 Wins!
          </p>
        )}
        {state.status === "DRAW" && (
          <p className="text-2xl text-neutral-400 font-bold">Draw!</p>
        )}
      </div>
      <GridView
        board={state.board}
        interactive={state.status === "IN_PROGRESS"}
        onColumnClick={handleDrop}
      />
      <button
        className="px-6 py-2 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/50"
        onClick={() => dispatch({type: "RESET"})}
      >
        Reset Game
      </button>
    </div>
  );
});

export default GameBoard;
