import React, { Component } from 'react';
import ValidationComp from './ValidationComponent/ValidationComponent.js';
import CharComp from './CharComponent/CharComponent.js';
import './App.css';

class App extends Component {
  state = {
    string: ''
  }

changeListener = (e) => {
  let stringNew = e.target.value;
  this.setState({
    string:stringNew
  })
}

deleteMe = (index) => {
  const string = this.state.string.split('');
  string.splice(index,1);
  const updatedText = string.join('');
  this.setState({
    string:updatedText
  })
}

  render() {
    const charList = this.state.string.split('').map((text, index) => {
      return (
        <CharComp
          char={text}
          key={index}
          log={() => this.deleteMe(index)}
        />
      )
    })

    return (
      <div className="App">
      <br/>

        <input type="text"
          onChange={this.changeListener}
          value={this.state.string}/>

        <br/>
          <ValidationComp numCount={this.state.string.length}/>
        <br/>
        {charList}

      </div>
    );
  }
}

export default App;
