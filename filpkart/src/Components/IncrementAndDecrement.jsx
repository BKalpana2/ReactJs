import React, { useState } from 'react'

function IncrementAndDecrement() {
    const[count,setCount]=useState(0);
    function add(){
        setCount(count+1)
    }
      function sub(){
        setCount(count-1)
    }
      function reset(){
        setCount(0)
    }
  return (
    <div>
      <button onClick={add}>+</button>
      <span>{count}</span>
      <button onClick={sub}>-</button> 
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default IncrementAndDecrement
