import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';



class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Contructor', props);
    this.state = {
      username: 'YudhaYuki',
  
      persons: [
        { id: 'abc1', name: 'Yudha', age: 27 },
        { id: 'abc2', name: 'Rene', age: 66 },
        { id: 'abc3', name: 'Lieve', age: 57 }
      ],
      otherState: 'Some other value',
      showPersons: false,
      toggleClicked: 0
  
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside ComponentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside ComponentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   // return true;
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons ; 
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
      console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  // state = {
  //   username: 'YudhaYuki',

  //   persons: [
  //     { id: 'abc1', name: 'Yudha', age: 27 },
  //     { id: 'abc2', name: 'Rene', age: 66 },
  //     { id: 'abc3', name: 'Lieve', age: 57 }
  //   ],
  //   otherState: 'Some other value',
  //   showPersons: false

  // }

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
    this.setState( (prevState, props) => { 
      return {
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  render() {

    console.log('[App.js] Inside render()');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
        persons={ this.state.persons }
        clicked={ this.deletePersonHandler }
        changed={ this.nameChangeHandler } /> ;
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Person</button>
        <Cockpit 
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </Aux>
    );

    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'I am a React App'));
  }
}

export default withClass(App, classes.App);