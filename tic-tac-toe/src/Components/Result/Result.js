import React from 'react';
import classes from './Result.module.css';

const result = props => {
    var resultElement = null;
    if (props.cellsFilled === 9) {
        resultElement = <h1 className={classes.result}>Game drawn!!!</h1>
    }
    if (props.gameOver) {
        resultElement = <h1 className={classes.result}>Player {props.winner} is the winner!!!</h1>
    }
    return resultElement;
}

export default result;