import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent.js';
import CharComponent from './CharComponent/CharComponent.js';
import './App.css';

class App extends Component {
  state = {
    string: ''
  }

  changeHandler = (event) => {
    let string = [...this.state.string]
    string = event.target.value;
    this.setState({
      string:string
    })
  }

  removeHandler = (index) => {
    const string = this.state.string.split('');
    string.splice(index,1);
    const updatedText = string.join('');
    this.setState({string:updatedText});
  }

  render() {

    const charList = this.state.string.split('').map((text, index) => {
      return <CharComponent
      character={text}
      key={index}
      remove={() => this.removeHandler(index)}
        />
    })

    return (
      <div className="App">
      <br/>
        <input type='text'
        onChange = {this.changeHandler}
        value = {this.state.string} />
        <p>
          {this.state.string}
        </p>
        <ValidationComponent numb={this.state.string.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
