import React from 'react';
import classes from './Reset.module.css';

const reset = props => {
    return (
        <button className={classes.btn} onClick={props.clicked}>Reset</button>
    );
}

export default reset;