import React, { Component } from 'react';
import './App.css';
import Name from './Name';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    name:"Gyanranjan"
  }
  
}

  render() {
    return <>
    <h1>{this.state.name}</h1>
    <Name name="Runa" />
    </>
  }
}
export default App;
