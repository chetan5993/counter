import React from 'react'

function Counter(props) {

  return (
    <div>
        <div className="showCouner">{props.count}</div>
        <button onClick={()=>{props.setCount(props.count+1)}}>Increament</button>
        <button  onClick={()=>{props.setCount(props.count-1)}}>Decreament</button>
       {props.count>=10 && <button  onClick={()=>{props.setCount(0)}}>Go back to 0</button>}
    </div>
  )
}

export default Counter