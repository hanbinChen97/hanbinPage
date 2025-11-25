import React from "react";

import GameBoard from "./_components/GameBoard";

export default function Connect4Page() {
  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <GameBoard />
    </div>
  );
}
