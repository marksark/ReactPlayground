import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'
import './App.css';

class App extends Component {
  state = {
    para: '',
    showLast: true
  }

  changedHandler = (event) => {
    let para = [...this.state.para];
    para = event.target.value;
    this.setState({para: para})
  }

  removeHandler = (index) => {
    const text = this.state.para.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({
      para:updatedText
    })
  }

  render() {
    
    const charList = this.state.para.split('').map((text, index) => {
      return <CharComponent
      character={text}
      key={index}
      remove={() => this.removeHandler(index)} />
    })

    return (

      <div className="App">
        <input className="inputHere"
        type='text'
        onChange={this.changedHandler}
        value = {this.state.para}
        />
        <p>{this.state.para}</p>
        <div className = 'showing'>
          <ValidationComponent value={this.state.para.length}/>
          {charList}
        </div>
      </div>

    );
  }
}

export default App;
