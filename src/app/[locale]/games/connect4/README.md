# Connect 4 Game Module

This directory contains the complete implementation of the Connect 4 game for the application.

## Overview
Connect 4 is a two-player connection board game, in which the players choose a color and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

## Directory Structure

- **`_lib/`**: Contains the core game engine, types, and pure logic functions. This layer is independent of the UI and can be tested in isolation.
  - [Read more](./_lib/README.md)
- **`_components/`**: Contains the React UI components (`GameBoard`, `GridView`, `Cell`) used to render the game.
  - [Read more](./_components/README.md)
- **`page.tsx`**: The main Next.js page component that renders the game.

## Integration
The game is exposed as a route at `/games/connect4`. The `page.tsx` file simply mounts the `GameBoard` component, which handles the entire game lifecycle.

## Features
- **Local Multiplayer**: Two players can play on the same device (Hotseat).
- **Win Detection**: Automatically detects wins in all directions (Horizontal, Vertical, Diagonal).
- **Draw Detection**: Detects when the board is full with no winner.
- **Reset Game**: Allows players to restart the match at any time.
- **Responsive Design**: The grid adapts to different screen sizes.
