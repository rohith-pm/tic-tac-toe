import React from 'react';
import classes from './Letter.module.css';

const letter = props => {
    return (
        <div className={classes.letter}>{props.lttr}</div>
    );
}

export default letter;