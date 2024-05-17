import React,{useState,useEffect} from 'react'
import './Trial.css'


const Trial = () => {
    
    const [num,setNum] = useState([]);

    useEffect(()=>(
        console.log("bnbj")
    ),[num])
  return (
    <div className='trial' >
        <div className="container">
            <h1>{num}</h1>
            <div><button onClick={()=>setNum(num+1)} >+</button>
            <button onClick={()=>setNum(num-1)} >-</button></div>
        </div>
    </div>
  )
}

export default Trial