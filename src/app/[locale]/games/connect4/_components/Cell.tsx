import React from "react";

import {CellValue} from "../_lib/types";

interface CellProps {
  value: CellValue;
  rowIndex: number;
  colIndex: number;
}

export default function Cell({value}: CellProps) {
  let colorClass = "bg-neutral-900"; // Empty slot (hole)
  if (value === 1)
    colorClass = "bg-red-500 shadow-[inset_0_4px_6px_rgba(0,0,0,0.4)]";
  if (value === 2)
    colorClass = "bg-yellow-500 shadow-[inset_0_4px_6px_rgba(0,0,0,0.4)]";

  return (
    <div
      className={`w-12 h-12 rounded-full ${colorClass} border-4 border-neutral-700 shadow-inner transition-colors duration-300`}
      data-testid="cell"
      role="button"
    ></div>
  );
}
