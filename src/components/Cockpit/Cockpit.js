import React from 'react';

import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';


const cockpit = (props) => {

    const assignClasses = [];
    let btnClass= classes.Button;

    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
      assignClasses.push( classes.red ); // classes = ['red']
    }

    if (props.persons.length <= 1) {
      assignClasses.push( classes.bold ); // classes = ['red', bold']
    }

    return (
        <Aux>
            <h1>{ props.appTitle }</h1>
            <p className={assignClasses.join(' ')}>This is really working</p>
            <button 
                className = {btnClass}
                onClick={props.clicked}>Toggle person</button>
            <button onClick={props.login} >Log in</button>
        </Aux>
    );
};

export default cockpit;