import React from 'react'
import { useState } from 'react';

const Home = () => {
 const[inputValue,setInputvalue]=useState(0)

 console.log(inputValue)


// const increment = ()=>{
//   setInputvalue(inputValue + 1)
// }
// const decrement = ()=>{
//   setInputvalue(inputValue  - 1)
  
// }
  return (
    <>
      <input
        type="number"
        placeholder='Enter Something'
        style={{ padding: 20, color: 'red' }}
        value={inputValue}
        onChange={(e)=>{
          setInputvalue(e.target.value)
          
          
        }}

      />


      {/* <button style={{padding:20,border:'none',background:'f1f1f1',margin:10}}  onClick={increment}  >+</button>
      <button style={{padding:20,border:'none',background:'f1f1f1',margin:10}}  onClick={decrement}  >-</button> */}
    </>
  )
}

export default Home