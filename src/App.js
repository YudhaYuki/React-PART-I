import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';



class App extends Component {
  state = {
    username: 'YudhaYuki',

    persons: [
      { name: 'Yudha', age: 27 },
      { name: 'Rene', age: 66 },
      { name: 'Lieve', age: 57 }
    ],
    otherState: 'Some other value'
  }

  userNameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
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

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>I am a React App</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Wijaya!!!')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Ramadhona')} 
          changed={this.nameChangeHandler} > My Hobbies: Racing </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />

        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        
        <UserInput 
          changed= {this.userNameChangeHandler}
          currentName= {this.state.username} />
        <UserOutput userName = {this.state.username} />
        <UserOutput userName = {this.state.username} />
        <UserOutput userName = 'Yudha' />

      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'I am a React App'));
  }
}

export default App;