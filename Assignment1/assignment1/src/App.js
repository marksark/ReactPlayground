import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {
  state = {
    username:'StateNameMarkito'
  }

  methodHandler = (nextName) => {
    this.setState({
      username: nextName
    })
  }

  secondMethodHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <UserOutput name = 'Mark' age = '25'/>
          <UserInput changed = {this.secondMethodHandler} name = {this.state.username}/>
          <UserOutput clickHere = {this.methodHandler.bind(this,'Marxei')} name = {this.state.username} age='24'/>
          <UserOutput clickHere = {this.methodHandler.bind(this,'Mar')} name='John' age='23'/>

        </p>
      </div>
    );
  }
}

export default App;
