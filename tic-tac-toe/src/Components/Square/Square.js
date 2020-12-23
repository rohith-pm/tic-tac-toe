import React from 'react';
import Letter from '../Letter/Letter';
import classes from './Square.module.css';

const square = props => {
    return(
    <div className={classes.square} onClick={() => props.clicked(props.ind)}>
        <Letter lttr={props.lttr}/>
    </div>
    );
}

export default square;