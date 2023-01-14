import React from 'react'
import { useState,useEffect} from 'react'
import Counter from './Counter';

function App() {
  const[count,setCount]=useState(0);
  if(count<0){
    alert("Error : count cant be less then 0 ")
  setCount(0);
  }
  useEffect(() => {
    console.log(count);
  
  
  }, [count])
  
  return (
    <div>

<Counter  count={count}  setCount={setCount}/>
    </div>
  )
}

export default App