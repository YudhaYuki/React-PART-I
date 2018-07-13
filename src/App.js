import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    username: 'YudhaYuki',

    persons: [
      { name: 'Yudha', age: 27 },
      { name: 'Rene', age: 66 },
      { name: 'Lieve', age: 57 }
    ],
    otherState: 'Some other value',
    showPersons: false

  }

  switchNameHandler = (newName) => {
    // console.log('Was click!');
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Rene', age: 66 },
        { name: 'Lieve', age: 80 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    // console.log('Was click!');
    this.setState({
      persons: [
        { name: 'Yudha', age: 27 },
        { name: event.target.value, age: 66 },
        { name: 'Lieve', age: 57 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div> 
          {this.state.persons.map(person => {
            return <Person 
                name={person.name} 
                age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">

        <h1>I am a React App</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle person</button>
          {persons}

      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'I am a React App'));
  }
}

export default App;