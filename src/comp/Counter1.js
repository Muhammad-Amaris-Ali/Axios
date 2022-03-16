import React,{useState} from 'react'

const Counter1 = () => {
const [count,setCount] = useState(0)





  return (
    <div>
 <button onClick={
            () => setCount(count + 1)
        }>Increment</button>
        <button onClick={
            () => setCount(count - 1)
        }>Decrement</button>
        <button onClick={
            () => setCount(0)
        }>Reset</button>


    </div>
  )
}

export default Counter1