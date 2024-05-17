import React, { Component } from 'react'
// import Counter from './Components/Counter'
import Counter1 from './Components/Counter1'

export default class App extends Component {

constructor(){
  super()

  this.state = {
    count: 0
  }
  
}
  componentDidMount(){
    console.log("componentdidmount: When Page Reloads For The First Time")
  }

  increment(){
    this.setState({count: this.state.count +1})
  }
  componentWillUnmount(){
    console.log("componentWillUnmount : Component Removed")
  }


  render() {
    return (
      <div>
       
        
        <button onClick={()=>this.increment()} >Increment</button>
      </div>
    )
  }
}
