import React,{useState} from 'react';

export const Temp = () => {
    const [temp,settemp] = useState(270)
  return <div>
  {temp}{""}
      <button  onClick={()=> settemp(temp - 273.15)}>celcius </button>{""}
      <button  onClick={()=> settemp((temp - 273.15) * 9/5 + 32)}>far </button>{""}
      <button onClick={
            () => settemp(270)
        }>Reset</button>
 </div>;
};
