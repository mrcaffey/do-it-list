import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">

        <div className="header">Do-It-List</div>

        <div className="btn">+</div>

        <input type="text"
            ref={((input) => {this.textInput =  input })} 
        />
      </div>
    );
  }
}

export default App;
