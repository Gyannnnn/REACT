import React from 'react'

class Name extends React.Component{
constructor(props){
    super(props)
}

    render(){
        return<>
        <h1>{this.props.name}</h1>
        </>
    }
}

export default Name