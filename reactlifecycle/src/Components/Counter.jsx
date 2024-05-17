import React, { Component } from 'react'

export default class Counter extends Component {
componentDidUpdate(prevprops,prevstate){
    if(prevprops.count !== this.props.count){
        console.log("Updated")
    }
}

  render() {
    return (
      <div><h1>{this.props.count}</h1></div>
    )
  }
}
