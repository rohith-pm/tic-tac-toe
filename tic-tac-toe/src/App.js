import classes from './App.module.css';
import { useState } from 'react';

function App() {

  const [state, setState] = useState({
    arr: ["", "", "", "", "", "", "", "", ""],
    currPlayer: "X",
    winner: "",
    gameOver: false,
    cellsFilled: 0
  });

  const reset = () => {
    setState({
      arr: ["", "", "", "", "", "", "", "", ""],
      currPlayer: "X",
      winner: "",
      gameOver: false,
      cellsFilled: 0
    })
  }
  const handleClick = ind => {
    if (!state.gameOver) {
      var newArr = [...state.arr];
      var newCurrPlayer = state.currPlayer;
      var winnerName = state.winner;
      var gameDone = state.gameOver;
      var cells = state.cellsFilled;
      if (state.arr[ind] === "") {
        cells = state.cellsFilled + 1;
        newArr[ind] = state.currPlayer;
        if (state.currPlayer === "X")
          newCurrPlayer = "O";
        else
          newCurrPlayer = "X";
      }
      const result = findResult(newArr);
      if (result !== undefined) {
        winnerName = result;
        gameDone = true;
      }
      setState({
        arr: newArr,
        currPlayer: newCurrPlayer,
        winner: winnerName,
        gameOver: gameDone,
        cellsFilled: cells
      })
    }
  };

  const findResult = arr => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (arr[a] !== "" && arr[a] === arr[b] && arr[a] === arr[c]) {
        return arr[a];
      }
    }
  }

  var resultElement = "";
  if (state.gameOver) {
    resultElement = <h1 className={classes.result}>Player {state.winner} is the winner!!!</h1>
  }
  if (state.cellsFilled === 9) {
    resultElement = <h1 className={classes.result}>Game drawn!!!</h1>
  }
  return (
    <div className={classes.game}>
      <div className={classes.squareContainer}>
        <div className={classes.square} onClick={() => handleClick(0)}>
          <div className={classes.letter}>{state.arr[0]}</div>
        </div>
        <div className={classes.square} onClick={() => handleClick(1)}>
          <div className={classes.letter}>{state.arr[1]}</div>
        </div>
        <div className={classes.square} onClick={() => handleClick(2)}>
          <div className={classes.letter}>{state.arr[2]}</div>
        </div>
      </div>
      <div className={classes.squareContainer}>
        <div className={classes.square} onClick={() => handleClick(3)}>
          <div className={classes.letter}>{state.arr[3]}</div>
        </div>
        <div className={classes.square} onClick={() => handleClick(4)}>
          <div className={classes.letter}>{state.arr[4]}</div>
        </div>
        <div className={classes.square} onClick={() => handleClick(5)}>
          <div className={classes.letter}>{state.arr[5]}</div>
        </div>
      </div>
      <div className={classes.squareContainer}>
        <div className={classes.square} onClick={() => handleClick(6)}>
          <div className={classes.letter}>{state.arr[6]}</div>
        </div>
        <div className={classes.square} onClick={() => handleClick(7)}>
          <div className={classes.letter}>{state.arr[7]}</div>
        </div>
        <div className={classes.square} onClick={() => handleClick(8)}>
          <div className={classes.letter}>{state.arr[8]}</div>
        </div>
      </div>
      <div className={classes.squareContainer}>
        {resultElement}
      </div>
      <div className={classes.squareContainer}>
        <button className={classes.btn} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;