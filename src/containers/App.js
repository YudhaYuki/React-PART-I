import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';



class App extends Component {
  state = {
    username: 'YudhaYuki',

    persons: [
      { id: 'abc1', name: 'Yudha', age: 27 },
      { id: 'abc2', name: 'Rene', age: 66 },
      { id: 'abc3', name: 'Lieve', age: 57 }
    ],
    otherState: 'Some other value',
    showPersons: false

  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // Const person = Object.assign({}, this.state.persons[personIndex]);
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div> 
          <Persons 
            persons={ this.state.persons }
            clicked={ this.deletePersonHandler }
            changed={ this.nameChangeHandler } />
        </div>
      );

      btnClass = classes.Red;
    }

    let assignClasses = [];
    if (this.state.persons.length <= 2) {
      assignClasses.push( classes.red ); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      assignClasses.push( classes.bold ); // classes = ['red', bold']
    }

    return (
      
        <div className={classes.App}>

          <h1>I am a React App</h1>
          <p className={assignClasses.join(' ')}>This is really working</p>
          <button 
            className = {btnClass}
            onClick={this.togglePersonsHandler}>Toggle person</button>
            {persons}

        </div>
    );

    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'I am a React App'));
  }
}

export default App;