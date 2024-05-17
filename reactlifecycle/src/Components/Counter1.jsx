import React, { useEffect } from 'react'

const Counter1 = ({num}) => {
useEffect(()=>{
    console.log("Functional Component updating ..........")
    return()=>{
        console.log("Functional Component: Removed")
    }
},[num])

  return (
    <div>{num}</div>
  )
}

export default Counter1