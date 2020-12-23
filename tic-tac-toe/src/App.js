import classes from './App.module.css';
import { useState } from 'react';
import Square from './Components/Square/Square';
import Reset from './Components/Reset/Reset';
import Result from './Components/Result/Result';

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
      if (result != null) {
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

  return (
    <div className={classes.game}>
      <div className={classes.row}>
        <Square clicked={handleClick} ind="0" lttr={state.arr[0]} />
        <Square clicked={handleClick} ind="1" lttr={state.arr[1]} />
        <Square clicked={handleClick} ind="2" lttr={state.arr[2]} />
      </div>
      <div className={classes.row}>
        <Square clicked={handleClick} ind="3" lttr={state.arr[3]} />
        <Square clicked={handleClick} ind="4" lttr={state.arr[4]} />
        <Square clicked={handleClick} ind="5" lttr={state.arr[5]} />
      </div>
      <div className={classes.row}>
        <Square clicked={handleClick} ind="6" lttr={state.arr[6]} />
        <Square clicked={handleClick} ind="7" lttr={state.arr[7]} />
        <Square clicked={handleClick} ind="8" lttr={state.arr[8]} />
      </div>
      <div className={classes.row}>
        <Result cellsFilled={state.cellsFilled} gameOver={state.gameOver} winner={state.winner}/>
      </div>
      <div className={classes.row}>
        <Reset clicked={reset}/>
      </div>
    </div>
  );
}

export default App;