import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from "./History";

function Game() {
  const [history, setHistory] = useState([{ square: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [stepNumber, setStepNumber] = useState(0);

  //Declaring a Winner
  useEffect(() => {
    const declareWinner = calculateWinner(history[history.length - 1]);
    setWinner(declareWinner);
  }, [history]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    const squares = "";
    const nextSquare = squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    nextSquare[i] = xIsNext ? "X" : "O";

    // if (xIsNext) {
    //   nextSquare[i] = "X";
    // } else {
    //   nextSquare[i] = "O";
    // }

    setXIsNext(!xIsNext);
  };

  //Undo game
  const jumpTo = (step) => {
    setHistory(step);
    setXIsNext(step % 2 === 0);
  };
  //Restart game
  const handleRestart = () => {
    setXIsNext(true);
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
        <Board squares={history} handleClick={handleClick} />
        <History history={history} jumpTo={jumpTo} />
      </div>
      <button onClick={handleRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
