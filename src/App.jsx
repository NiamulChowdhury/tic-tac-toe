import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className={`
        w-16 h-16 sm:w-20 sm:h-20
        border-2 border-gray-300
        flex items-center justify-center
        text-2xl sm:text-3xl font-bold
        rounded-lg
        transition-all duration-200
        hover:bg-gray-100 hover:scale-105
        ${value === "X" ? "text-blue-500" : "text-pink-500"}
      `}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = `🎉 Winner: ${winner}`;
  } else if (!squares.includes(null)) {
    status = "🤝 It's a draw!";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  function handleClick(i) {
    if (squares[i] || winner || !squares.includes(null)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  return (
    <div className="bg-white shadow-xl rounded-xl p-6">
      <div className="text-center text-lg font-semibold mb-4">{status}</div>

      <div className="grid grid-cols-3 gap-2">
        {squares.map((square, i) => (
          <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);

  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext);
    setHistory([...history, nextSquares]);
  }

  function jumpTo(move) {
    setHistory(history.slice(0, move + 1));
    setXIsNext(move % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    const description = move ? `Go to move #${move}` : "Go to game start";

    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className="text-sm text-blue-600 hover:underline"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-purple-300 flex flex-col items-center justify-center p-6">
      {/* Title centered for whole app */}
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Tic-Tac-Toe</h1>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* Board */}
        <div className="flex flex-col justify-between">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>

        {/* History */}
        <div className="bg-white p-4 rounded-xl shadow-md w-64 flex flex-col">
          <h2 className="font-semibold mb-3 text-center">History</h2>

          {/* Scrollable history so height matches nicely */}
          <ol className="space-y-1 overflow-y-auto max-h-64 pr-2">{moves}</ol>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
