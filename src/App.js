import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.dispatch({type: 'ADD'})}>Add</button>
        <button onClick={() => this.props.dispatch({type: 'SUBTRACT'})}>Subtract</button>
      </div>
    );
  }
}

export default connect()(App);
