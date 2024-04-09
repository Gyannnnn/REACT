import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {    
  const [counter,setCounter] = useState(15);
  const addValue = ()=> {
    counter = counter+1;
    setCounter(counter)
    console.log("Clicked",counter)
  }
  const removeValue =()=>{
    counter = counter-1;
    setCounter(counter)
    console.log("Removed One Value ", Math.random()*100);
  }

  return (
    
    
    <>
      <h1>Gyan Aur R</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue} >Add Value</button>
      <br />
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App