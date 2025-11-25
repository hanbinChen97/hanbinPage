import React from "react";

import {Board} from "../_lib/types";
import Cell from "./Cell";

interface GridViewProps {
  board: Board;
  onColumnClick: (colIndex: number) => void;
  interactive: boolean;
}

export default function GridView({
  board,
  onColumnClick,
  interactive,
}: GridViewProps) {
  return (
    <div className="grid grid-cols-7 gap-3 bg-neutral-800 p-4 rounded-2xl shadow-2xl border-4 border-neutral-700">
      {board.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((cellValue, colIndex) => (
            <div
              className="cursor-pointer hover:brightness-110 transition-all"
              data-testid="cell-wrapper"
              key={`${rowIndex}-${colIndex}`}
              onClick={() => interactive && onColumnClick(colIndex)}
            >
              <Cell colIndex={colIndex} rowIndex={rowIndex} value={cellValue} />
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
