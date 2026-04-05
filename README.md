# Tic-Tac-Toe Game

A modern, interactive Tic-Tac-Toe game built with React and Vite. This project demonstrates a fully functional two-player game with move history tracking, winner detection, and a beautiful responsive UI powered by Tailwind CSS.

## 🚀 Live Demo

Play the game online: [https://niamulchowdhury.github.io/tic-tac-toe/](https://niamulchowdhury.github.io/tic-tac-toe/)

## Overview

This is a professional implementation of the classic Tic-Tac-Toe game featuring:

- **Two-player gameplay** with X and O players
- **Intelligent win detection** using standard game rules
- **Draw game handling** when the board fills without a winner
- **Move history** allowing players to review and rewind to any previous game state
- **Responsive design** that works seamlessly on desktop and mobile devices
- **Modern UI** with smooth animations, hover effects, and an inviting gradient background

## Features

### Core Gameplay

- **Player Turns**: Players alternate between X (blue) and O (pink)
- **Win Detection**: Automatically detects winning patterns across rows, columns, and diagonals
- **Draw Detection**: Recognizes when all 9 squares are filled without a winner
- **Real-time Status**: Displays current player, winner, or draw status with emoji indicators

### Game History

- **Move Tracking**: Complete history of all moves made during the current game
- **Time Travel**: Jump to any previous move to review game state or restart from that point
- **Intuitive Navigation**: Numbered move buttons make it easy to navigate through game history

### User Interface

- **Responsive Layout**: Grid layout that adapts to mobile, tablet, and desktop screens
- **Interactive Squares**: Hover effects and smooth scaling transitions for visual feedback
- **Color-Coded Players**: X moves appear in blue, O moves in pink for easy identification
- **Modern Styling**: Gradient background, rounded corners, shadows, and polished visual design
- **Emoji Indicators**: Fun emojis (🎉 for wins, 🤝 for draws) enhance the experience

## Tech Stack

### Core Technologies

- **React 19.2.4** - Modern UI library with Hooks for state management
- **Vite 8.0.1** - Lightning-fast build tool and dev server with Hot Module Replacement (HMR)
- **Tailwind CSS 3.4.19** - Utility-first CSS framework for rapid UI development

### Development Tools

- **ESLint 9.39.4** - Code linting to maintain code quality
- **PostCSS 8.5.8** - CSS processing with Autoprefixer for browser compatibility
- **@vitejs/plugin-react 6.0.1** - Vite plugin for React with JSX support

## Project Structure

```
tic-tac-toe/
├── src/
│   ├── App.jsx              # Main game component with all game logic
│   ├── main.jsx             # React app entry point
│   └── index.css            # Global styles (Tailwind imports)
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration for Tailwind
├── eslint.config.js         # ESLint rules configuration
└── README.md                # This file
```

## Component Architecture

### Square Component

Represents a single cell on the Tic-Tac-Toe board. Each square is a clickable button that displays the player's mark (X or O) or remains empty.

**Props:**

- `value`: The current content of the square (X, O, or null)
- `onSquareClick`: Callback function triggered when the square is clicked

**Features:**

- Responsive sizing (adjusts between mobile and desktop)
- Dynamic text color based on player (blue for X, pink for O)
- Hover effects with background color change and scale animation

### Board Component

Manages the 3x3 grid of squares and the core game logic for player moves and win/draw detection.

**Props:**

- `xIsNext`: Boolean indicating if it's X's turn
- `squares`: Array of 9 elements representing the board state
- `onPlay`: Callback function to update game history

**Features:**

- Renders the game grid using the Square component
- Calculates and displays game status (current player, winner, or draw)
- Handles click events and validates moves (prevents overwriting, playing after win/draw)
- Detects winners using the `calculateWinner` utility function

### Game Component (Main)

The root component that manages overall game state, move history, and the game flow.

**State Management:**

- `history`: Array of board states for each move (enables time travel)
- `xIsNext`: Tracks which player's turn it is

**Features:**

- Initializes game with an empty 9-square board
- Maintains complete move history
- Implements time-travel functionality to jump to any previous game state
- Renders the Board and History components
- Manages responsive layout for different screen sizes

### calculateWinner Utility Function

Determines if there is a winner based on the current board state.

**Logic:**

- Checks all 8 possible winning combinations:
  - 3 rows: [0,1,2], [3,4,5], [6,7,8]
  - 3 columns: [0,3,6], [1,4,7], [2,5,8]
  - 2 diagonals: [0,4,8], [2,4,6]
- Returns the winning player (X or O) or null if no winner

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download the project:

```bash
cd tic-tac-toe
```

2. Install dependencies:

```bash
npm install
```

### Running the Development Server

Start the local development server with hot module replacement:

```bash
npm run dev
```

The game will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The compiled files will be in the `dist/` directory, ready for deployment.

### Previewing Production Build

Preview the production build locally:

```bash
npm run preview
```

### Code Quality

Run ESLint to check code quality and style compliance:

```bash
npm run lint
```

## How to Play

1. **Start the Game**: The game begins with X as the first player
2. **Make Moves**: Click any empty square to place your mark (X or O)
3. **Win Condition**: Get three of your marks in a row (horizontal, vertical, or diagonal) to win
4. **Draw**: If all 9 squares are filled without a winner, the game is a draw
5. **Game Status**: Check the status display above the board to see whose turn it is or if someone has won
6. **Review History**: Use the History panel on the right to jump back to any previous move and continue from that point

## Game Rules

- Players take turns placing their marks on empty squares
- X always goes first
- Each square can only be played once per game
- A player wins by getting three of their marks in a line (row, column, or diagonal)
- If all squares are filled without a winner, the game is a draw
- Players can rewind moves using the history panel to explore different game paths

## Customization

### Styling

The project uses Tailwind CSS for styling. Customize colors, spacing, and responsive breakpoints in:

- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles
- Inline `className` attributes in `src/App.jsx` - Component-specific styles

### Game Board Size

To change the board from 3x3, you would need to modify:

- The grid layout in the Board component
- The winning conditions in the `calculateWinner` function
- The initial empty board array (currently 9 elements)

## Performance Optimizations

- **Vite HMR**: Fast refresh during development
- **Tree-shaking**: Unused code is removed during production build
- **Code Splitting**: React components are efficiently bundled
- **Responsive Images**: CSS handles image scaling for different devices

## Browser Compatibility

This project uses modern JavaScript (ES6+) and CSS3 features. It works best on:

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

For older browsers, you may need to add Babel transpilation.

## Future Enhancement Ideas

- **AI Opponent**: Add a computer player with difficulty levels
- **Game Statistics**: Track wins, losses, and draws across multiple games
- **Multiplayer Online**: Add real-time multiplayer using WebSockets
- **Sound Effects**: Add audio feedback for moves and wins
- **Themes**: Implement dark mode and custom color themes
- **Animations**: Add more sophisticated animations when winning or drawing
- **Accessibility**: Enhance keyboard navigation and screen reader support

## Development Notes

### Key Libraries and Their Purpose

- **React Hooks**: `useState` manages component-level state for turn tracking and history
- **Vite**: Provides fast development experience with instant HMR
- **Tailwind CSS**: Enables rapid UI development with utility classes
- **PostCSS + Autoprefixer**: Ensures CSS works across all modern browsers

### Code Quality

- ESLint configuration enforces React best practices
- Code follows React naming conventions (PascalCase for components, camelCase for functions)
- Functional components with Hooks are used throughout (modern React best practice)

## License

This project is created for educational purposes as part of a React and Next.js course. Feel free to use, modify, and distribute as needed for learning purposes.

## Support

For questions or issues:

1. Check the code comments in `src/App.jsx`
2. Review React documentation at [react.dev](https://react.dev)
3. Consult Vite documentation at [vite.dev](https://vite.dev)
4. Reference Tailwind CSS docs at [tailwindcss.com](https://tailwindcss.com)
