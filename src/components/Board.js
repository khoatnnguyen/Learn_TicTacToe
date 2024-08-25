import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square value={(0, 1, 2)} handleClick={() => handleClick} />
        </div>
        <div className="board-row">
          <Square value={(3, 4, 5)} handleClick={() => handleClick} />
        </div>
        <div className="board-row">
          <Square value={(6, 7, 8)} handleClick={() => handleClick} />
        </div>
      </div>
    </div>
  );
}
