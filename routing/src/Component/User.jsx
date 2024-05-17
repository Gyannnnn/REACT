import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'

const User = () => {

const params = useParams()
const navigation = useNavigate()
console.log(params.id)

  return (
    <div className='user' >

<button onClick={()=>navigation('about')} >Click me</button>

    </div>
  )
}

export default User