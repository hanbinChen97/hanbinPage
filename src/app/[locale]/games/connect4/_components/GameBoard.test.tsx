/// <reference types="@testing-library/jest-dom" />
import * as matchers from "@testing-library/jest-dom/matchers";
import {cleanup, fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import {afterEach, describe, expect, it} from "vitest";

import GameBoard from "./GameBoard";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

describe("GameBoard", () => {
  it("should render the board with 42 cells", () => {
    render(<GameBoard />);
    // Assuming cells have a specific role or test id.
    // Let's assume we give them a role 'gridcell' or similar, or just check for buttons if they are interactive.
    // Or we can use a test-id 'cell-r-c'.
    // For now, let's look for elements with a specific class or role.
    // Let's assume GridView renders 42 cells.
    const cells = screen.getAllByTestId("cell");
    expect(cells).toHaveLength(42);
  });

  it("should place a piece when a column is clicked", () => {
    render(<GameBoard />);
    const cells = screen.getAllByTestId("cell");

    // Click the first column (any cell in the first column will trigger the column click)
    // In GridView, we have 6 rows * 7 cols.
    // Index 0 is (0,0), Index 1 is (0,1)... Index 6 is (0,6)
    // Index 7 is (1,0)...
    // We want to click column 0. Let's click the top-left cell (index 0).
    fireEvent.click(cells[0]);

    // Expect the bottom-left cell to be filled (Player 1 is Red)
    // Bottom-left is (5,0). Index = 5 * 7 + 0 = 35.
    expect(cells[35]).toHaveClass("bg-red-500");
  });

  it("should switch turns after a move", async () => {
    render(<GameBoard />);
    const cellWrappers = screen.getAllByTestId("cell-wrapper");
    const cells = screen.getAllByTestId("cell");

    // P1 moves in Col 0
    fireEvent.click(cellWrappers[0]);
    console.log("Status Text:", screen.getByTestId("status").textContent);
    expect(await screen.findByText("Current Player: 2")).toBeInTheDocument();

    // P2 moves in Col 1
    fireEvent.click(cellWrappers[1]); // (0,1)
    expect(await screen.findByText("Current Player: 1")).toBeInTheDocument();

    // Check P2's piece at (5,1) -> Index 36
    expect(cells[36]).toHaveClass("bg-yellow-500");
  });
});
