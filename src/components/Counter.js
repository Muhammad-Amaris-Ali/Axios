import React,{useState} from 'react';

export const Counter = () => {
    const [counter,setCounter] = useState(0)
    return <div>
        {counter}{" "}
        <button onClick={
            () => setCounter(counter + 1)
        }>Increment</button>
        <button onClick={
            () => setCounter(counter - 1)
        }>Decrement</button>
        <button onClick={
            () => setCounter(0)
        }>Reset</button>
    </div>;
};
